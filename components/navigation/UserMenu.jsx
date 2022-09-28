import { signIn, signOut, useSession } from 'next-auth/react';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { RiWechatLine } from 'react-icons/ri';
import { TbBellRinging } from 'react-icons/tb';

const UserMenu = () => {
  const { data: session } = useSession();
  return (
    <div className="hidden sticky top-0 bg-bg1 z-40 px-5 border-b-[1px] border-line2 py-4 lg:flex justify-between gap-5 w-full">
      <div className="">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="bg-line2 placeholder:text-lg placeholder:absolute placeholder:top-1 text-lg w-[375px] h-[36px] rounded-lg px-2 "
          id=""
        />
      </div>
      <div className="text-3xl flex flex-row-reverse gap-5 text-gray1">
        {!session ? (
          <buton onClick={() => signIn()} className="flex flex-col gap-2 items-center">
            <AiOutlineLogin />
            <h1 className="text-sm">Login</h1>
          </buton>
        ) : (
          <>
            <div className="flex items-center gap-2 flex-col">
              <BiUserCircle />
              <h1 className="text-sm">{session.user.name}</h1>
            </div>
            <div className="flex items-center gap-2 flex-col">
              <TbBellRinging />
              <h1 className="text-sm">100</h1>
            </div>
            <div className="flex items-center gap-2 flex-col">
              <RiWechatLine />
              <h1 className="text-sm">15</h1>
            </div>
            <buton onClick={() => signOut()} className="flex flex-col gap-2 items-center">
              <AiOutlineLogout />
              <h1 className="text-sm">Logout</h1>
            </buton>
          </>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
