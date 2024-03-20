import { useState, ChangeEvent } from "react";

export const useForm = <T extends Object>(objetoInicial: T) => {
    const [objeto, setObjeto] = useState(objetoInicial);

    const dobleEnlace = ({ target }: ChangeEvent<any>) => {
        const { name, value } = target;
        /* console.log(name + " " + value); */
        setObjeto({
            ...objeto,
            [name]: value,
        });
    };

    return {
        objeto,
        dobleEnlace,
        ...objeto,
    };
};
