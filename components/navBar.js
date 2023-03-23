import NavItem from "./navItem";


const NavBar = props => (
    <>
        {props.navItems.map(item => (
            <NavItem
                key={item.path}
                id={item.id}
                path={item.path}
                label={item.label}
                position={item.position}
            />
        ))}
    </>
);

export default NavBar;
