type HeadType = {
    title?: string
}


export default (head: HeadType) => {
    document.title = <string>head.title
}