import {AlwaysBeCasting} from 'parser/core/modules/AlwaysBeCasting'
import {Tincture} from 'parser/core/modules/Tincture'
import {CastTime} from './CastTime'
import {Combos} from './Combos'
import {DualCast} from './Dualcast'
import {Embolden} from './Embolden'
import {Gauge} from './Gauge'
import {GeneralCDDowntime} from './GeneralCDDowntime'
import {Interrupts} from './Interrupts'
import {MeleeCombos} from './MeleeCombos'
import {Procs} from './Procs'
import {Weaving} from './Weaving'

export {DualStatistic} from 'parser/jobs/rdm/statistics/DualStatistic'

export default [
	AlwaysBeCasting,
	Embolden,
	Gauge,
	CastTime,
	DualCast,
	GeneralCDDowntime,
	Interrupts,
	Procs,
	Combos,
	MeleeCombos,
	Tincture,
	Weaving,
]
