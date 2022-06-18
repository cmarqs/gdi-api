
export interface IProfile{
    id: number;
    name: string;
}

function getNew(): IProfile{
    return { id: -1, name: '' };
}

export default {
    new: getNew,
}