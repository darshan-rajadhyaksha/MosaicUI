import AvatarGroup from "@/components/essentials/avatar-group/avatar-group";

const AvatarGroupPreview = () => {
  return (
    <AvatarGroup 
      label="Project members"
      avatars={avatars}
      additionalText="+10K members"
    />
  );
};

const avatars = [
  {
    name: "Darshan Sunil Rajadhyaksha",
    url: "https://github.com/darshan-rajadhyaksha",
    image: "https://avatars.githubusercontent.com/u/70127031?v=4",
  },
  {
    name: "Another Member",
    url: "https://github.com/darshan-rajadhyaksha",
    image: "https://picsum.photos/id/399/256/256",
  },
  {
    name: "Darshan Sunil Rajadhyaksha",
    url: "https://codepen.io/dsr",
    image: "https://assets.codepen.io/1168397/internal/avatars/users/default.png",
  },
  {
    name: "One more another member",
    url: "https://github.com/darshan-rajadhyaksha",
    image: "https://picsum.photos/id/177/256/256",
  }
]

export default AvatarGroupPreview;