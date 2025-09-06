export default function Entry({img , title , country , googleMapsLink , dates , text}){
    return (
        <article>
            <figure>
                <img src = {img.src} alt = {img.alt}></img>
            </figure>
            <div>
                <p className="name">{country}</p>
                <a href = {googleMapsLink} target="_blank">view on google maps</a>
            
                <h2>{title}</h2>
                <p className="date">{dates}</p>

                <p className="text">{text}</p>
            </div>
        </article>
    )
}