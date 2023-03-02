
export default class Product {
    id?: string;
    series?: string;
    size?: string;
    name?: string;
    description?: string;
    features?: [];
    header?: [{
        headername?: string; 
        subheader?: [{
            subheadername: string, 
            subheadervalue?:[]
        }]
    }]
    catogery?: string;
    brand?: string;
    images?: [];
    pdf?: string;
    imgf?: string;
    imgb?: string;
    imgs1?: string;
    imgm?: string;
    tags?:[];
}


