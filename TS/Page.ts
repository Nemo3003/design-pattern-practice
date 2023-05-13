import IPage from './Interfaces/IPage';

function read(page: IPage) {
    console.log(page.text);

    // Since it is readonly, you cannot assign a new value
    page.text += '!'
}