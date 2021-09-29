import React from 'react'

export const Images = (props: { imagePath: string ; archiveName: string | undefined; }) => {
    console.log(props.imagePath);
    return <img src={(props.imagePath)} alt={props.archiveName} width={1528} height={859}/>;
};