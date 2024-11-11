// utils/error-handler.ts
import * as Sentry from "@sentry/nextjs";

type ResultType<T> = {
  success: boolean;
  data: T | null;
  error: Error | null;
};

// NOTE: consider using handleAsyncOperation, we can just use Sentry.captureException function in the catch block.
export async function handleAsyncOperation<T>(
  fn: () => Promise<T>,
  errorMessage: string
): Promise<ResultType<T>> {
  try {
    const data = await fn();
    return {
      error: null,
      success: true,
      data,
    };
  } catch (error) {
    Sentry.captureException(error, {
      extra: { message: errorMessage },
    });
    return {
      error: error as Error,
      success: false,
      data: null,
    };
  }
}
