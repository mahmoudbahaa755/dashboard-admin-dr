interface SkillProps {
    name: string;
    percentage: number;
    image: string;
}

const Skill: React.FC<SkillProps> = ({ name, percentage, image }) => {
    return (
        <div className="mb-4">
            <div className="flex items-center">
                <svg className="w-8 h-8 mr-4 fill-current text-white">
                    <use xlinkHref={`${image}#${name}`} />
                </svg>
                <div className="flex-1">
                    <p className="text-gray-600 font-bold">
                        {name} <span className="float-right">{percentage}%</span>
                    </p>
                    <div className="h-1 bg-gray-300 rounded-full mt-2">
                        <div
                            className="h-1 bg-blue-500 rounded-full"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};