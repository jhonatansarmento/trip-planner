const Header = () => {
  return (
    <div className='flex flex-col items-center gap-3'>
      <img src='/logo.svg' alt='logo planner' />
      <p className='text-zinc-300 text-lg'>
        Convide seus amigos e planeje sua próxima viagem!
      </p>
    </div>
  );
};

export default Header;