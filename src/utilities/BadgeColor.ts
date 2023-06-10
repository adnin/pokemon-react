
const secondary = ["ground", "normal", "rock"]
const danger = ["dragon", "fire", "fighting"]
const success = ["grass", "bug"]
const info = ["ice", "water", "steel"]
const dark = ["dark", "psychic", "ghost"]
const warning = ["fairy", "flying"]
const poison = ["poison"]
const electric = ["electric"]

export default function BadgeColor(type: string) {
    switch(true) { 
        case secondary.includes(type): { 
            return 'bg-gray-100 text-gray-700'
        } 
        case danger.includes(type): { 
           
            return 'bg-red-100 text-red-700'
        }
        case success.includes(type): { 
            
           return 'bg-green-100 text-green-700'
        } 
        case poison.includes(type): { 
            
            return 'bg-green-700 text-green-100'
         } 
        case info.includes(type): { 
            
           return 'bg-blue-100 text-blue-700'
        } 
        case dark.includes(type): { 
            
           return 'bg-slate-700 text-slate-100'
        } 
        case warning.includes(type): { 
            
           return 'bg-yellow-100 text-yellow-700'
        }
        case electric.includes(type): { 
            
            return 'bg-amber-700 text-amber-100'
         }
        default: { 
           return 'bg-gray-100 text-gray-700' 
        } 
     } 
}
