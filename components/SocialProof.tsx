import { Avatar, Button, Tooltip } from "@nextui-org/react";
const SocialProof: React.FC = () => {
  return (
    <>
      <Tooltip
        placement="bottom"
        color="primary"
        showArrow={true}
        content="James Clear"
      >
        <Avatar
          isBordered
          color="warning"
          size="lg"
          src="https://d1kdkr2pswehq6.cloudfront.net/jamesclear-photo.webp"
          className="lg:w-20 lg:h-20 lg:text-large"
        />
      </Tooltip>
      <Tooltip
        placement="bottom"
        color="primary"
        showArrow={true}
        content="Jordan B. Peterson"
      >
        <Avatar
          isBordered
          color="warning"
          size="lg"
          src="https://d1kdkr2pswehq6.cloudfront.net/jordanpeterson-photo.webp"
          className="lg:w-20 lg:h-20 lg:text-large"
        />
      </Tooltip>
      <Tooltip
        placement="bottom"
        color="primary"
        showArrow={true}
        content="Tony Robbins"
      >
        <Avatar
          isBordered
          color="warning"
          size="lg"
          src="https://d1kdkr2pswehq6.cloudfront.net/tonyrobbins-img.webp"
          className="lg:w-20 lg:h-20 lg:text-large"
        />
      </Tooltip>
      <Tooltip
        placement="bottom"
        color="primary"
        showArrow={true}
        content="Cal Newport"
      >
        <Avatar
          isBordered
          color="warning"
          size="lg"
          src="https://d1kdkr2pswehq6.cloudfront.net/calnewport-img.webp"
          className="lg:w-20 lg:h-20 lg:text-large"
        />
      </Tooltip>
      <Tooltip
        placement="bottom"
        color="primary"
        showArrow={true}
        content="Ryan Holiday"
      >
        <Avatar
          isBordered
          color="warning"
          size="lg"
          className=" lg:w-20 lg:h-20 lg:text-large"
          src="https://d1kdkr2pswehq6.cloudfront.net/ryanholiday-img.webp"
        />
      </Tooltip>
      <Tooltip
        placement="bottom"
        color="primary"
        showArrow={true}
        content="Viktor Frankl"
      >
        <Avatar
          isBordered
          color="warning"
          size="lg"
          className=" lg:w-20 lg:h-20 lg:text-large"
          src="https://d1kdkr2pswehq6.cloudfront.net/viktorfrakl-img.webp"
        />
      </Tooltip>
    </>
  );
};

export default SocialProof;
