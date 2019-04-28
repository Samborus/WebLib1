export interface JWTResponse {
    result: string;
    id: number;
    exception: string;
    status: number;
    isCanceled: boolean;
    isCompleted: boolean;
    isCompletedSuccessfully: boolean;
    creationOptions: number;
    asyncState: string;
    isFaulted: boolean;
}
