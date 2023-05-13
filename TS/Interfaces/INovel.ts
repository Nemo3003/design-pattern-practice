interface Novel {
    author: {
        name: string;
    };
    setting: Setting;
}

interface Setting {
    place: string,
    year: number,
}

export default Novel;