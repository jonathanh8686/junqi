import "./Tile.css";

interface TileProps {
    piece?: string
    x: number
    y: number
}

export default function Tile({piece, x, y} : TileProps) {

    let campsites = ["1,2", "2,3", "2,8", "3,2", "1,4", "3,4", "1,7", "3,7", "1,9", "3,9"];
    let headquarters = ["1,0", "3,0", "1,11", "3,11"];
    if(campsites.includes(x +","+ y)) {
        return <div className = "campsite">{piece}</div>;
    }
    else if(headquarters.includes(x + "," + y)) {
        return <div className = "hq">{piece}</div>;
    }
    else {
        return <div className = "tile">{piece}</div>;
    }
        
}