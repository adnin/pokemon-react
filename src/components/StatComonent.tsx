import { IStats } from "../interfaces/Stat";

export default function StatComonent({stat, base_stat, effort}: IStats) {

  return (
    <li className="pb-3 sm:pb-4">
        <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
                <p className="text-base capitalize font-semibold text-gray-900 dark:text-white">
                {stat.name.replace('-', ' ')}
                </p>
            </div>
            <div className="inline-flex items-center text-sm text-gray-500 truncate dark:text-gray-400">
                {base_stat}
            </div>
        </div>
    </li>
  )
}
