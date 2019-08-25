export abstract class CustomError extends Error {
  protected constructor(message: string) {
    super(message);

    this.name = this.constructor.name;
  }

  public toJSON(): object {
    return {
      name:    this.name,
      message: this.message,
      stack:   this.stack,
      ...this.extendToJSON(),
    };
  }

  protected abstract extendToJSON(): object;
}
