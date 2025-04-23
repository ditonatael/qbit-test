type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
}

const comments: IComment[] = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
]

const handleCountComment = (comments: IComment[]) => {
    let total = 0
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].commentId) {
            total += 1
            if (comments[i].replies) {
                total += handleCountComment(comments[i].replies as IComment[])
            }
        }
    }
    return total
}

const totalComment = handleCountComment(comments)
console.log(`Total komentar dari data di atas adalah ${totalComment} komentar.`)