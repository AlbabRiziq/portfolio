const Footer = () => {
    const tahun = () => {
        let ok = new Date().getFullYear()

        return ok
    }

    return (


        <div className="bg-slate-400 h-20 rounded-md flex items-center justify-evenly flex-wrap">
            <p className="text-white font-light text-xs">ALBAB RIZIQ</p>
            <p className="text-white font-light text-xs">{tahun()}</p>
        </div>
    )
}

export default Footer;