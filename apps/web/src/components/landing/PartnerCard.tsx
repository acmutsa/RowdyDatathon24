import React from "react";
import Link from "next/link";
import Image from "next/image";

type Partner = {
	name: string;
	logo: string;
	url: string;
	tier: string;
};

type colorMap = {
	key: string;
	value: string;
};

// const tierBorderMap = {
//   [Tier.Title]:           "w-[15rem]      sm:w-72           md:w-72       lg:w-80       2xl:w-[19rem]",
//   [Tier.Gold]:            "w-[12.75rem]   sm:w-[14.75rem]   md:w-[16rem]  lg:w-72       2xl:w-[19rem]",
//   [Tier.Silver]:          "w-[11rem]      sm:w-52           md:w-60       lg:w-[16rem]  2xl:w-[17rem] ",
//   [Tier.Bronze]:          "w-32           sm:w-40           md:w-[12rem]  lg:w-[14rem]  2xl:w-[16rem]",
//   [Tier.Rowdy_Partner]:   "w-[7rem]       sm:w-32           md:w-40       lg:w-[11rem]  2xl:w-[13rem]",
//   [Tier.In_Kind_Partner]: "w-[6rem]       sm:w-[7rem]       md:w-32       lg:w-40       2xl:w-52",
// };

const tierColorMap: { [key: string]: string } = {
	["Title Sponsor"]: "text-purple-500",
	["Gold Sponsor"]: "text-yellow-600",
	["Silver Sponsor"]: "text-gray-400",
	["Bronze Sponsor"]: "text-amber-800",
	["Rowdy Partner"]: "text-blue-500",
	["Rowdy In-Kind"]: "text-red-500",
};

function PartnerCard({
	partner,
	is_title,
}: {
	partner: Partner;
	is_title: boolean;
}) {
	return (
		<Link
			href={partner?.url}
			target="_blank"
			className={`duration-350 group font-semibold opacity-100 transition ease-in-out hover:-translate-y-8`}
		>
			<div className="solid-shadow aspect-square rounded-3xl bg-forest-green p-0">
				<Image
					src={`/img/logo/${partner.logo}`}
					className="aspect-square w-32 md:w-64"
					alt={`${partner.name} logo`}
					width={64}
					height={64}
				/>
			</div>
		</Link>
	);
}

export default PartnerCard;
