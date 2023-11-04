

export default function UserProfile() {
    const badges = ['html5', 'react', 'codeply', 'angularjs', 'css3', 'jquery', 'bootstrap', 'responsive'];
    const statisticsNumbers = [
        {id:1, class: 'bg-red',  text: '900 Followers' },
        {id:2, class: 'bg-green', text: '43 Forks' },
        {id:3, class: 'bg-blue', text: '245 Views' },
      ];
      const activities = [
        { name: 'Abby', action: 'joined ACME Project Team in', topic: '`Collaboration`' },
        { name: 'Gary', action: 'deleted My Board1 in', topic: '`Discussions`' },
        { name: 'Kensington', action: 'deleted MyBoard3 in', topic: '`Discussions`' },
        { name: 'John', action: 'deleted My Board1 in', topic: '`Discussions`' },
        { name: 'Skell', action: 'deleted his post Look at Why this is.. in', topic: '`Discussions`' },
      ];
      
    return (
        <div className="container shadow-2xl  mx-auto px-4">

            <div className=" text-s mt-6">
                <h5 className="mb-3 text-2xl font-bold">User Profile</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h6 className="text-xl font-bold mb-4">About</h6>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Web Designer, UI/UX Engineer
                        </p>
                        <h6 className="text-xl font-bold mt-8 mb-4">Hobbies</h6>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Indie music, skiing and hiking. I love the great outdoors.
                        </p>
                    </div>
                    <div>
                        <h6 className="text-xl font-bold mb-4">Recent badges</h6>
                        <div className="flex flex-wrap gap-4">
                        {badges.map((badge) => (
              <a key={badge} href="/" className="bg-black px-2 py-2 text-xs rounded-full">{badge}</a>
            ))}
                        </div>
                        <div className="flex gap-2 flex-wrap mt-8">
                        {statisticsNumbers.map((badge) => (
      <div key={badge.id} className={`${badge.class} text-2xs px-2 rounded-full`}>
      {badge.text}
      </div>
       ))}
          </div>
                    </div>
                    <div className="col-span-2">
                        <h5 className="mt-8 mb-4 text-2xl font-bold"><span className="fa fa-clock-o ion-clock mr-2"></span> Recent Activity</h5>
                        <div className="">
                           
                        <table className="table-auto  w-full">
    <tbody>
      {activities.map((activity, index) => (
        <tr key={index} className={index % 2 === 0 ? 'bg-opacity-100' : ''}>
          <td className="text-gray-600 border-t bg-cover border-gray py-4">
            <strong>{activity.name}</strong> {activity.action} <strong className="font-bold">{activity.topic}</strong>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}