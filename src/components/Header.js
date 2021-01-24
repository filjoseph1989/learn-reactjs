const Header = ({ title }) => {
    return (
        <header>
            <h1>{ title }</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker For Cay'
}

export default Header
