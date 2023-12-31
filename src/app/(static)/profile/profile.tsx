import Icon from "@/elements/Icon";
import Image from "next/image";
export default function Profile() {
  
  // const skills = [
  //   {
  //     name: "HTML5",
  //     percentage: 85,
  //     image: "/svg/html5.svg",
  //   },
  //   {
  //     name: "Bootstrap 5",
  //     percentage: 50,
  //     image: "/svg/bootstrap.svg",
  //   },{
  //     name: "Angular",
  //     percentage: 70,
  //     image: "/svg/angular-icon.svg",
  //   },
  //   {
  //     name: "Css3",
  //     percentage: 70,
  //     image: "/svg/css-3.svg",
  //   },
  //   {
  //     name: "React JS",
  //     percentage: 35,
  //     image: "/svg/react.svg",
  //   },
  // ];
  // const socialMediaLinks = [
  //   {
  //     id: 1,
  //     name: "Facebook",
  //     src: "/Image/facebook.png",
  //     url: "https://www.facebook.com/",
  //   },
  //   {
  //     id: 2,
  //     name: "Twitter",
  //     src: "/Image/twitter.png",
  //     url: "https://twitter.com/",
  //   },
  //   {
  //     id: 3,
  //     name: "Youtube",
  //     src: "/Image/youtube.png",
  //     url: "https://youtube.com/",
  //   },{
  //       id: 4,
  //       name: "LinkedIN",
  //       src: "/Image/linkedin.png",
  //       url: "https://linkedin.com/",
  //     },
  // ];
  return (
    <div className="w-80 rounded-lg bg-inner shadow-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="relative">
          <Image
            className="w-full rounded-lg"
            src="https://via.placeholder.com/800x500"
            alt="Card image cap"  
            width={800}
            height={500}
          />
          <Image
            className="w-20 h-20 rounded-full absolute left-0 bottom-0 -mb-8 ml-4 border-4 border-white"
            src="https://via.placeholder.com/800x500"
            alt="profile-image" 
            width={200}
  height={200}
/> 
        </div>
      </div>
      <div className="px-6 mt-10 pb-4">
        <div>
          <h5 className="text-2xl font-bold">Mark Stern</h5>
        <p className="text-gray-600">
            Some quick example text to build on the card title and make up the
             bulk of the card content.
        </p>
        </div>
        <div className="mt-4 flex flex-row gap-4">
          {/* {socialMediaLinks.map((icon) => (
                    <Icon key={icon.id} href={icon.url} src={icon.src} name={icon.name} className="w-6 h-6" />
                ))} */}
        </div>
      </div>

      <div className="px-6 py-4 border-t border-gray-300">
        {/* {skills.map((skill) => (
                <div className="mb-4" key={skill.name}>
                    <div className="flex items-center">
                        <Image className="w-8 h-8 mr-4" src={skill.image} alt="skill Image" />
                        <div className="flex-1">
                            <p className="text-gray-600 font-bold">
                                {skill.name} <span className="float-right">{skill.percentage}%</span>
                            </p>
                            <div className="h-1 bg-gray-300 rounded-full mt-2">
                                <div
                                    className="h-1 bg-gray rounded-full"
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))} */}
      </div>
    </div>
  );
}
