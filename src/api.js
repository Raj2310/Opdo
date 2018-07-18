export const getNextTaskType=(taskType)=>{
switch (taskType) {
    case 'todo':
        return 'doing'
        break
    case 'doing':
        return 'done'
        break
    case 'done':
        return 'archieve'
        break
    default:
        return 'archieve'
        break
}
}