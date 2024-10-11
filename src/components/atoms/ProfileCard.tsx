import { Profile } from '@/lib/types';
import Image from 'next/image';

const ProfileCard = ({ profile }: { profile: Profile }) => {
  return (
    <div className="bg-white lg:py-6 lg:px-6 py-4 px-8  rounded-xl lg:w-[292px] w-[234px] lg:h-96 h-[311px] flex flex-col items-center shadow-[0px_15px_24px_0px_#0000001F] mx-auto">
      <Image
        src={profile.image}
        alt={profile.name}
        width={100}
        height={100}
        className="rounded-full lg:w-[120px] w-16 lg:h-[120px] h-16 object-cover mb-4 overflow-visible"
      />
      <h3 className="lg:text-2xl text-lg font-extrabold lg:leading-9 leading-6 text-black">
        {profile.name}
      </h3>
      <p className="text-[#4A77FF] lg:text-base text-sm">
        {profile.job} -{' '}
        <span className="font-extrabold">{profile.experience}</span>
      </p>

      <div className="lg:my-6 my-3 flex flex-wrap justify-center font-bold">
        {profile?.skills?.map((skill, index) => (
          <span
            key={index}
            className="text-[#5E626F] lg:text-base text-xs px-2 py-1 rounded-md m-1 border border-[#C1C5CF]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
