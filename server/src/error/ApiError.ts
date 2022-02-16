export class ApiError extends Error {
  constructor(status: number, message: string) {
    super();
    this.message = message;
  }

  static badRequest(message: string) {
    return new ApiError(404, message);
  }
}
