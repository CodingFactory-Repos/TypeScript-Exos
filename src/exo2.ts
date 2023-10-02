export interface Subject {
    id: number,
    name?: string,
    created_at?: string | Date,
}

export interface Obj {
    [key: string]: Subject
}

export function sortByDate(obj: Obj, desc = false): Subject[] {
    const sorted = Object.values(obj).sort((a, b) => {
        if (a.created_at && b.created_at) {
            const dateA = new Date(a.created_at)
            const dateB = new Date(b.created_at)
            return desc ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime()
        }
        return 0
    })
    return sorted
}

const obj: Obj = {
    "1": {
        id: 1,
        name: "test",
        created_at: "2021-01-01"
    },
    "2": {
        id: 2,
        name: "test",
        created_at: "2021-01-02"
    },
    "3": {
        id: 3,
        name: "test",
        created_at: "2021-01-03"
    }
};

// console.log(sortByDate(obj, true))
// console.log(sortByDate(obj))
