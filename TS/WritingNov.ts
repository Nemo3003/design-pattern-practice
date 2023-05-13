interface Writing{
    title: string;
}

interface Novella extends Writing {
    pages: number;
}

interface Setting extends Novella {
    setting: string
}

let myNovella: Setting = {
    pages: 195,
    title: 'My life',
    setting: 'New England'
};

let missingPages: Setting = {
    title: 'Missing parts'
}

let extraProperty: Setting = {
    title: "Ulises",
    pages: 199,
    setting:"New Hampshire",
    year: 2000
}
