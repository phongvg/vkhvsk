/*Recent Transaction*/
type recentTrans = {
    title: string;
    subtitle: string;
    textcolor: string;
    boldtext: boolean;
    line: boolean;
    link: string;
    url: string;
};

/*product performance*/
type userInformationType = {
    id?: number;
    name?: string;
    email?: string;
    status?: string;
    statuscolor: string;
    group?: string;
};

type groupInformationType = {
    id?: number;
    name?: string;
    status?: string;
    statuscolor: string;
};

type deviceInformationType = {
    id?: number;
    name?: string;
    status?: string;
    statuscolor: string;
    quantity?: number;
    note?: string;
};


export type { recentTrans, userInformationType, groupInformationType, deviceInformationType }