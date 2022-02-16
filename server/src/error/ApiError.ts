export class ApiError extends Error {
  constructor(_: number, message: string) {
    super();
    this.message = message;
  }

  static badRequest(message: string) {
    return new ApiError(404, message);
  }
}
