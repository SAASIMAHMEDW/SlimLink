import { nanoid, customAlphabet } from "nanoid";

export interface IDGeneratorOptions {
  /**
   * Character set to use. If omitted, nanoid's default URL-friendly
   * alphabet is used.
   */
  alphabet?: string;
  /**
   * Default length for generated IDs. Must be an integer >= 1.
   * Default: 6
   */
  length?: number;
}

/**
 * ID generator wrapper around nanoid/customAlphabet.
 *
 * - Default length: 6
 * - If `alphabet` is provided, uses customAlphabet(alphabet, len)
 * - Otherwise uses nanoid(len)
 */
class IDGenerator {
  private alphabet?: string;
  private length: number;

  constructor(options: IDGeneratorOptions = {}) {
    const len = options.length ?? 6;
    this.assertValidLength(len);
    this.length = len;

    if (options.alphabet) {
      this.assertValidAlphabet(options.alphabet);
      this.alphabet = options.alphabet;
    }
  }

  private assertValidLength(n: number) {
    if (!Number.isInteger(n) || n < 1) {
      throw new TypeError("length must be an integer >= 1");
    }
  }

  private assertValidAlphabet(a: string) {
    if (typeof a !== "string" || a.length < 2) {
      throw new TypeError(
        "alphabet must be a string with at least 2 characters"
      );
    }
    // prevent extremely large alphabets (practical sanity limit)
    if (a.length > 1024) {
      throw new TypeError("alphabet is too large");
    }
  }

  /**
   * Generate an ID using the configured alphabet/length.
   * You can override length for a single call.
   */
  generate(length?: number): string {
    const len = length ?? this.length;
    this.assertValidLength(len);

    if (this.alphabet) {
      // customAlphabet returns a generator for a fixed size; create one per-call
      const gen = customAlphabet(this.alphabet, len);
      return gen();
    }

    // default nanoid for URL-friendly alphabet
    return nanoid(len);
  }

  /**
   * Create a new IDGenerator preconfigured for numeric-only IDs.
   * Example: IDGenerator.numeric(6)
   */
  static numeric(length = 6) {
    return new IDGenerator({ alphabet: "0123456789", length });
  }

  /**
   * Create a new IDGenerator preconfigured for alphanumeric (upper+lower+digits).
   */
  static alphaNumeric(length = 6) {
    return new IDGenerator({
      alphabet:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      length,
    });
  }

  /**
   * Create a new IDGenerator using nanoid's default URL-friendly alphabet.
   */
  static urlSafe(length = 6) {
    return new IDGenerator({ length });
  }

  /**
   * Update default length for this generator instance.
   */
  setDefaultLength(length: number) {
    this.assertValidLength(length);
    this.length = length;
  }

  /**
   * Update alphabet for this generator instance.
   * Pass undefined to revert to nanoid default alphabet.
   */
  setAlphabet(alphabet?: string) {
    if (alphabet !== undefined) this.assertValidAlphabet(alphabet);
    this.alphabet = alphabet;
  }
}

const gen = IDGenerator.alphaNumeric(); // default length 6 numerice

export default gen;

export { IDGenerator };
