export interface Article {
    title: string,
    body: string,
    imageUrl: string,
    author: string,
    createdAt: Date,
    likesQuantity: number,
    isLikedByUser: boolean | undefined,
    id: string,
    tags : Array<string>,
    updatedAt: Date | undefined
}