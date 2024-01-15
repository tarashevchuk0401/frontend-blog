export interface Article {
    title: string,
    body: string,
    imageUrl: string,
    author: string,
    authorEmail: string,
    createdAt: Date,
    likesQuantity: number,
    isLikedByUser: boolean | undefined,
    id: string,
    tags : Array<string>,
    updatedAt: Date | undefined
}