import { VscBellDot } from "react-icons/vsc";

const Header = () => {
    return (
        <div className="flex justify-between mb-8 p-4">
            <h1 className="text-lg font-bold">FamilyFriends</h1>
            <VscBellDot size={25} />
        </div>
    );
}

export default Header;