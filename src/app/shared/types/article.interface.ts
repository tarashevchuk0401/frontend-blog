export interface ArticleInterface {
    title: string,
    body: string,
    author: string,
    createdAt: Date,
    likesQuantity: number,
    isLikedByUser: boolean | undefined,
    id: number,
    tags : Array<string>,
    updatedAt: Date | undefined
}