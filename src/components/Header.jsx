import { Typography } from '@material-tailwind/react';

function Header() {
  return (
    <header className="w-screen h-auto border-b-[1px] border-gray-600 text-center p-2 flex justify-center items-center">
      <Typography variant="h1">Todo app</Typography>;
    </header>
  );
}

export default Header;
