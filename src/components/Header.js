const Header = ({ title }) => {

    return (
        <header className="bg-dark py-3">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h2 className="display-5 fw-bolder">{title}</h2>
                </div>
            </div>
        </header>
    )
}

export default Header;