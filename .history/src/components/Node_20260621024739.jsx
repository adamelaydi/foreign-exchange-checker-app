export default function Node({data}){
    return(
        <>
            <div className="node">
                <span className="title"><span>{data.base}</span>/jpy</span>
                <span className="value">157.91</span>
                <div className="pointer">
                    <span className="arrow">^</span>
                    <span className="value">+0.04%</span>
                </div>
            </div>
        </>
    )
}