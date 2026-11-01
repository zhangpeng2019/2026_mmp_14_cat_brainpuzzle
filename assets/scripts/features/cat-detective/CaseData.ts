import { make, CaseDefinition } from './CaseTypes';
import { CASES_19_40 } from './Cases19To40';
import { CASES_41_60 } from './Cases41To60';
import { CASES_61_80 } from './Cases61To80';
export type { CaseAction, CaseBackground, CaseDefinition, CaseObject, CaseStep } from './CaseTypes';

/** 糖果美术版：第1—18关，以场景动作和多阶段目标组织谜题。 */
const INITIAL_CASES: readonly CaseDefinition[] = [
    make({
        "id": 1,
        "title": "消失的委托书",
        "category": "观察",
        "background": "office",
        "story": "第一份委托不见了。桌上只剩一枚爪印，猫助手却一直盯着窗边。",
        "goal": "找到并拼合委托书",
        "objects": [
            {
                "id": "paw",
                "label": "墨爪印",
                "kind": "paw",
                "x": 0.19,
                "y": 0.59,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "paw"
                ],
                "description": "墨迹沿着桌沿延伸，像是有人拖走了一张纸。"
            },
            {
                "id": "curtain",
                "label": "窗帘",
                "kind": "curtain",
                "x": 0.77,
                "y": 0.18,
                "w": 0.23,
                "h": 0.24,
                "hiddenWhen": [
                    "curtain"
                ]
            },
            {
                "id": "scrap-a",
                "label": "纸角",
                "kind": "paper",
                "x": 0.76,
                "y": 0.42,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "curtain"
                ],
                "hiddenWhen": [
                    "join"
                ]
            },
            {
                "id": "cushion",
                "label": "坐垫",
                "kind": "cushion",
                "x": 0.48,
                "y": 0.71,
                "w": 0.27,
                "h": 0.15,
                "hiddenWhen": [
                    "cushion"
                ],
                "art": "cushion"
            },
            {
                "id": "scrap-b",
                "label": "半张信纸",
                "kind": "paper",
                "x": 0.48,
                "y": 0.72,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "cushion"
                ],
                "hiddenWhen": [
                    "join"
                ]
            },
            {
                "id": "letter",
                "label": "完整委托",
                "kind": "letter",
                "x": 0.49,
                "y": 0.47,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "join"
                ]
            },
            {
                "id": "cat",
                "label": "猫助手",
                "kind": "cat",
                "x": 0.15,
                "y": 0.79,
                "w": 0.23,
                "h": 0.23,
                "description": "猫助手望向窗帘：布边露出的白角，和桌面的纸屑颜色一样。",
                "art": "cat-orange"
            },
            {
                "id": "drawer",
                "label": "卡住的抽屉",
                "kind": "box",
                "x": 0.2,
                "y": 0.3,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "drawer"
                ],
                "description": "抽屉的拉环露在外面，向下拉开能看到里面。",
                "art": "box-closed"
            },
            {
                "id": "stamp",
                "label": "猫爪印章",
                "kind": "clue",
                "x": 0.2,
                "y": 0.3,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "drawer"
                ],
                "hiddenWhen": [
                    "seal"
                ],
                "art": "paw-stamp"
            }
        ],
        "steps": [
            {
                "id": "paw",
                "source": "paw",
                "action": "tap",
                "requires": [],
                "feedback": "爪印拖过桌沿，窗边和坐垫旁都留下纸屑。",
                "hints": [
                    "先看看桌面留下了什么。",
                    "墨爪印旁边有纸纤维。",
                    "点击桌上的墨爪印。"
                ]
            },
            {
                "id": "curtain",
                "source": "curtain",
                "action": "swipe",
                "requires": [],
                "feedback": "拨开窗帘，找到有半个猫爪印的纸角。",
                "hints": [
                    "窗帘边缘露出了白纸。",
                    "沿窗帘下摆横向拉开。",
                    "向左滑动窗帘，露出纸角。"
                ],
                "direction": "left"
            },
            {
                "id": "cushion",
                "source": "cushion",
                "action": "swipe",
                "requires": [],
                "feedback": "掀起坐垫，下面压着另一半信纸。",
                "hints": [
                    "坐垫下面似乎压着东西。",
                    "把坐垫向上掀起来。",
                    "向上滑动坐垫，露出半张信纸。"
                ],
                "direction": "up"
            },
            {
                "id": "drawer",
                "source": "drawer",
                "action": "swipe",
                "requires": [],
                "feedback": "抽屉打开，里面是侦探社遗失的猫爪印章。",
                "hints": [
                    "抽屉里还有最后一件东西。",
                    "把外露的拉环向下拉。",
                    "向下滑动抽屉。"
                ],
                "direction": "down"
            },
            {
                "id": "join",
                "source": "scrap-a",
                "action": "drag",
                "target": "scrap-b",
                "requires": [
                    "paw",
                    "curtain",
                    "cushion"
                ],
                "feedback": "两半爪印正好拼成完整印章，委托书找到了。",
                "hints": [
                    "比较两块纸的断口。",
                    "两半猫爪印应当对齐。",
                    "把纸角拖到半张信纸上。"
                ]
            },
            {
                "id": "seal",
                "source": "stamp",
                "action": "drag",
                "target": "letter",
                "requires": [
                    "join",
                    "drawer"
                ],
                "feedback": "印章补齐空缺的认证图案，第一份委托终于完整。",
                "hints": [
                    "拼好的信封还缺少认证。",
                    "抽屉里的猫爪印章正好对应空白圆圈。",
                    "把猫爪印章拖到完整委托书。"
                ]
            }
        ],
        "ending": "委托人请侦探社去旧街寻找一只走失的小猫。第一条线索出现了！",
        "mechanism": "遮挡寻物与拼合",
        "legacyInspiration": "旧第3关：直接目标与滑动揭示目标混合；重新设计委托书主题",
        "timeLimitSeconds": 270,
        "sceneCaption": "第一份委托不见了。"
    }),
    make({
        "id": 2,
        "title": "门后的猫",
        "category": "道具",
        "background": "alley",
        "story": "储物间传来小猫的叫声。钥匙掉在门后，手伸不过门缝。",
        "goal": "取回钥匙，打开储物间",
        "objects": [
            {
                "id": "newspaper",
                "label": "旧报纸",
                "kind": "paper",
                "x": 0.16,
                "y": 0.77,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "pad"
                ]
            },
            {
                "id": "gap",
                "label": "门缝",
                "kind": "gap",
                "x": 0.62,
                "y": 0.68,
                "w": 0.3,
                "h": 0.12,
                "description": "门缝很低，扁平的东西可以穿过去。"
            },
            {
                "id": "rod",
                "label": "细杆",
                "kind": "rod",
                "x": 0.22,
                "y": 0.49,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "poke"
                ]
            },
            {
                "id": "key-behind",
                "label": "门后钥匙",
                "kind": "key",
                "x": 0.73,
                "y": 0.58,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "poke"
                ],
                "description": "钥匙够不着。直接拨动可能把它推得更远，需要先接住。"
            },
            {
                "id": "paper-under",
                "label": "铺好的报纸",
                "kind": "paper",
                "x": 0.63,
                "y": 0.72,
                "w": 0.24,
                "h": 0.15,
                "visibleWhen": [
                    "pad"
                ],
                "hiddenWhen": [
                    "pull"
                ]
            },
            {
                "id": "key",
                "label": "取回的钥匙",
                "kind": "key",
                "x": 0.44,
                "y": 0.79,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "pull"
                ],
                "hiddenWhen": [
                    "unlock"
                ]
            },
            {
                "id": "lock",
                "label": "门锁",
                "kind": "lock",
                "x": 0.75,
                "y": 0.35,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "unlock"
                ]
            },
            {
                "id": "cat",
                "label": "获救小猫",
                "kind": "cat",
                "x": 0.72,
                "y": 0.52,
                "w": 0.27,
                "h": 0.27,
                "visibleWhen": [
                    "unlock"
                ],
                "art": "cat-gray",
                "hiddenWhen": [
                    "carry"
                ]
            },
            {
                "id": "basket",
                "label": "软垫猫篮",
                "kind": "bed",
                "x": 0.2,
                "y": 0.27,
                "w": 0.25,
                "h": 0.23,
                "art": "bed-fixed",
                "description": "先让小猫平静，再把它抱进干燥猫篮。"
            },
            {
                "id": "safe-cat",
                "label": "窝里的小猫",
                "kind": "cat",
                "x": 0.2,
                "y": 0.27,
                "w": 0.23,
                "h": 0.23,
                "visibleWhen": [
                    "carry"
                ],
                "art": "cat-gray"
            }
        ],
        "steps": [
            {
                "id": "pad",
                "source": "newspaper",
                "action": "drag",
                "target": "gap",
                "requires": [],
                "feedback": "报纸铺进门缝，正好接在钥匙下方。",
                "hints": [
                    "钥匙需要一个接住它的平面。",
                    "报纸可以从门缝铺进去。",
                    "把旧报纸拖到门缝。"
                ]
            },
            {
                "id": "poke",
                "source": "rod",
                "action": "drag",
                "target": "key-behind",
                "requires": [
                    "pad"
                ],
                "feedback": "细杆把钥匙拨到报纸上，响起轻轻的一声叮。",
                "hints": [
                    "现在可以移动门后的钥匙了。",
                    "细长的杆子够得到它。",
                    "把细杆拖到门后钥匙。"
                ]
            },
            {
                "id": "pull",
                "source": "paper-under",
                "action": "swipe",
                "requires": [
                    "poke"
                ],
                "feedback": "慢慢抽回报纸，钥匙跟着滑到了门外。",
                "hints": [
                    "钥匙已落在报纸上。",
                    "慢慢向自己抽回报纸。",
                    "向下滑动铺好的报纸，把钥匙带出来。"
                ],
                "direction": "down"
            },
            {
                "id": "unlock",
                "source": "key",
                "action": "drag",
                "target": "lock",
                "requires": [
                    "pull"
                ],
                "feedback": "钥匙转动，门开了！小猫扑进助手怀里。",
                "hints": [
                    "找到钥匙对应的地方。",
                    "门锁就在门的右侧。",
                    "把取回的钥匙拖到门锁。"
                ]
            },
            {
                "id": "calm",
                "source": "cat",
                "action": "hold",
                "requires": [
                    "unlock"
                ],
                "feedback": "小猫闻到熟悉的气味，紧张地发抖变成轻轻呼噜。",
                "hints": [
                    "门开了，小猫还不敢走。",
                    "先停留片刻，轻轻安抚它。",
                    "按住小猫约一秒。"
                ],
                "durationMs": 900
            },
            {
                "id": "carry",
                "source": "cat",
                "action": "drag",
                "target": "basket",
                "requires": [
                    "calm"
                ],
                "feedback": "小猫被抱进干燥猫篮，门后的救援完成。",
                "hints": [
                    "小猫平静下来后才能移动。",
                    "柔软猫篮能让它暖和起来。",
                    "把小猫拖到软垫猫篮。"
                ]
            }
        ],
        "ending": "小猫获救，它脖子上挂着一枚太阳形徽章。",
        "mechanism": "门缝取物与安抚救援",
        "legacyInspiration": "旧第1/45关：工具因果与救援分阶段，移植为门后小猫",
        "timeLimitSeconds": 270,
        "sceneCaption": "储物间传来小猫的叫声。"
    }),
    make({
        "id": 3,
        "title": "最后一束阳光",
        "category": "机关",
        "background": "sunroom",
        "story": "猫奶奶想让幼猫睡在暖光里。夕阳被窗帘挡住，猫窝又在窗户照不到的角落。",
        "goal": "让阳光照进猫窝",
        "objects": [
            {
                "id": "curtain",
                "label": "厚窗帘",
                "kind": "curtain",
                "x": 0.16,
                "y": 0.18,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "open"
                ]
            },
            {
                "id": "sun",
                "label": "夕阳光束",
                "kind": "sun",
                "x": 0.19,
                "y": 0.35,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "open"
                ],
                "description": "光束直直地落在镜架位置，猫窝在它的右侧。"
            },
            {
                "id": "mirror",
                "label": "小镜子",
                "kind": "mirror",
                "x": 0.26,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "place"
                ]
            },
            {
                "id": "stand",
                "label": "镜架",
                "kind": "stand",
                "x": 0.48,
                "y": 0.49,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "place"
                ]
            },
            {
                "id": "mirror-set",
                "label": "镜面·朝上",
                "kind": "mirror",
                "x": 0.48,
                "y": 0.49,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "place"
                ],
                "hiddenWhen": [
                    "rotate"
                ]
            },
            {
                "id": "mirror-right",
                "label": "镜面·朝右",
                "kind": "mirror",
                "x": 0.48,
                "y": 0.49,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "rotate"
                ]
            },
            {
                "id": "bed",
                "label": "猫窝",
                "kind": "bed",
                "x": 0.79,
                "y": 0.64,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "rotate"
                ],
                "description": "这里晒不到太阳，但和镜架在同一侧。"
            },
            {
                "id": "warm-cat",
                "label": "暖光小猫",
                "kind": "cat",
                "x": 0.79,
                "y": 0.64,
                "w": 0.25,
                "h": 0.25,
                "visibleWhen": [
                    "rotate"
                ],
                "art": "cat-white"
            },
            {
                "id": "plant-block",
                "label": "挡光大叶子",
                "kind": "plant",
                "x": 0.78,
                "y": 0.4,
                "w": 0.22,
                "h": 0.24,
                "hiddenWhen": [
                    "leaf"
                ],
                "art": "plant-bloom",
                "description": "一片大叶子正伸在镜子到猫窝的光路上。"
            }
        ],
        "steps": [
            {
                "id": "open",
                "source": "curtain",
                "action": "swipe",
                "requires": [],
                "feedback": "窗帘拉开，光束落在空镜架旁。",
                "hints": [
                    "厚窗帘遮住了光。",
                    "沿着窗帘的轨道拉开。",
                    "向左滑动厚窗帘。"
                ],
                "direction": "left"
            },
            {
                "id": "place",
                "source": "mirror",
                "action": "drag",
                "target": "stand",
                "requires": [
                    "open"
                ],
                "feedback": "镜子固定在架上，光暂时反射到了天花板。",
                "hints": [
                    "光能被什么改变方向？",
                    "把镜子放进光束经过的位置。",
                    "把小镜子拖到镜架。"
                ]
            },
            {
                "id": "leaf",
                "source": "plant-block",
                "action": "swipe",
                "requires": [],
                "feedback": "大叶子拨向旁边，猫窝与镜子之间没有遮挡了。",
                "hints": [
                    "从镜子到猫窝之间还有遮挡。",
                    "把伸出的叶子往上拨。",
                    "向上滑动挡光的大叶子。"
                ],
                "direction": "up"
            },
            {
                "id": "rotate",
                "source": "mirror-set",
                "action": "swipe",
                "requires": [
                    "place",
                    "leaf"
                ],
                "feedback": "镜面转向右侧，暖暖的反射光照到猫窝。",
                "hints": [
                    "光束还在天花板上。",
                    "让镜面向猫窝一侧偏转。",
                    "向右滑动镜面，让光照到猫窝。"
                ],
                "direction": "right"
            },
            {
                "id": "steady",
                "source": "mirror-right",
                "action": "hold",
                "requires": [
                    "rotate"
                ],
                "feedback": "镜架扣稳，光束不会随风晃动，幼猫安心睡着了。",
                "hints": [
                    "光已经照到窝里，但镜架仍晃动。",
                    "按住镜架让卡扣扣稳。",
                    "按住朝右的镜面约一秒。"
                ],
                "durationMs": 900
            }
        ],
        "ending": "幼猫打起呼噜。猫奶奶送来一条鱼干失踪案的线索。",
        "mechanism": "光路排障与镜面固定",
        "legacyInspiration": "旧第42关：多种环境方法共同改变角色状态，重做为阳光房",
        "timeLimitSeconds": 250,
        "sceneCaption": "猫奶奶想让幼猫睡在暖光里。"
    }),
    make({
        "id": 4,
        "title": "鱼干失踪案",
        "category": "推理",
        "background": "market",
        "story": "鱼铺的鱼干不见了。阿狸、雨靴客和面包师都来过，谁拿走了鱼干？",
        "goal": "调查三条证据，再指出取走鱼干的人",
        "objects": [
            {
                "id": "prints",
                "label": "湿脚印",
                "kind": "paw",
                "x": 0.43,
                "y": 0.73,
                "w": 0.15,
                "h": 0.15,
                "description": "脚印里有水珠，鞋底是完整横纹。"
            },
            {
                "id": "tank",
                "label": "漏水鱼缸",
                "kind": "water",
                "x": 0.19,
                "y": 0.32,
                "w": 0.15,
                "h": 0.15,
                "description": "地面上的水只从鱼缸流向柜台。"
            },
            {
                "id": "receipt",
                "label": "鱼干取货单",
                "kind": "letter",
                "x": 0.65,
                "y": 0.31,
                "w": 0.15,
                "h": 0.15,
                "description": "取货单上的签名是雨靴客，数量与失踪鱼干一致。"
            },
            {
                "id": "fox",
                "label": "阿狸",
                "kind": "suspect",
                "x": 0.17,
                "y": 0.55,
                "w": 0.22,
                "h": 0.24,
                "description": "阿狸穿的是干燥的圆点鞋底，与湿脚印横纹不符。"
            },
            {
                "id": "boots",
                "label": "雨靴客",
                "kind": "boot",
                "x": 0.51,
                "y": 0.51,
                "w": 0.22,
                "h": 0.24,
                "description": "雨靴是湿的，鞋底有完整横纹。先调查全部证据再确认。"
            },
            {
                "id": "baker",
                "label": "面包师",
                "kind": "suspect",
                "x": 0.82,
                "y": 0.55,
                "w": 0.22,
                "h": 0.24,
                "description": "面包师鞋底有面粉，现场湿脚印里没有面粉。"
            },
            {
                "id": "glass",
                "label": "检视放大镜",
                "kind": "magnifier",
                "x": 0.5,
                "y": 0.87,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "tread"
                ],
                "art": "magnifier"
            }
        ],
        "steps": [
            {
                "id": "prints",
                "source": "prints",
                "action": "scrub",
                "requires": [],
                "feedback": "擦去薄薄泥水，留下完整横纹鞋底，与猫爪印完全不同。",
                "hints": [
                    "泥水遮住了足迹。",
                    "来回擦净表面才能看清花纹。",
                    "在湿脚印上来回擦拭。"
                ],
                "minDistance": 0.45
            },
            {
                "id": "tank",
                "source": "tank",
                "action": "tap",
                "requires": [],
                "feedback": "鱼缸漏水，取货者踩水走向柜台；鞋底应当仍然潮湿。",
                "hints": [
                    "水是从哪里来的？",
                    "看看柜台旁的鱼缸。",
                    "点击漏水鱼缸。"
                ]
            },
            {
                "id": "receipt",
                "source": "receipt",
                "action": "swipe",
                "requires": [],
                "feedback": "取货单写着雨靴客的名字，数量刚好对应缺少的鱼干。",
                "hints": [
                    "卷起的单据只露出半行字。",
                    "把卷边向上展开。",
                    "向上滑动鱼干取货单。"
                ],
                "direction": "up"
            },
            {
                "id": "tread",
                "source": "glass",
                "action": "drag",
                "target": "boots",
                "requires": [
                    "prints"
                ],
                "feedback": "放大镜看见雨靴底的横纹缺口，和柜台前的泥印吻合。",
                "hints": [
                    "要比较的是鞋底，不是衣服颜色。",
                    "雨靴有完整横纹，放大镜能看清缺口。",
                    "把放大镜拖到雨靴客。"
                ]
            },
            {
                "id": "choose",
                "source": "boots",
                "action": "tap",
                "requires": [
                    "prints",
                    "tank",
                    "receipt",
                    "tread"
                ],
                "feedback": "横纹、湿鞋、签名三项一致，取货者是雨靴客。",
                "hints": [
                    "让三条证据指向同一个人。",
                    "既有横纹湿鞋，又在取货单上签名的是谁？",
                    "点击雨靴客作出判断。"
                ]
            }
        ],
        "ending": "原来是老板忘了登记预订取货。误会解除，侦探社收到一张画展邀请函。",
        "mechanism": "现场清理与鞋底排除",
        "legacyInspiration": "旧第6/21关：对不同角色使用工具逐项排除，而非只读三条文字",
        "timeLimitSeconds": 250,
        "sceneCaption": "鱼铺的鱼干不见了。"
    }),
    make({
        "id": 5,
        "title": "画框之外",
        "category": "脑洞",
        "background": "gallery",
        "story": "画展出口的钥匙不在画里。说明牌写着：“作品的背面，也属于展览。”",
        "goal": "找到藏在画框背后的钥匙",
        "objects": [
            {
                "id": "plaque",
                "label": "说明牌",
                "kind": "letter",
                "x": 0.23,
                "y": 0.69,
                "w": 0.15,
                "h": 0.15,
                "description": "“作品的背面，也属于展览。”画框边缘还露出半个挂钩。"
            },
            {
                "id": "frame",
                "label": "可移动画框",
                "kind": "frame",
                "x": 0.51,
                "y": 0.35,
                "w": 0.32,
                "h": 0.3,
                "hiddenWhen": [
                    "move"
                ]
            },
            {
                "id": "hook",
                "label": "空挂钩",
                "kind": "hook",
                "x": 0.82,
                "y": 0.34,
                "w": 0.15,
                "h": 0.15,
                "description": "墙上有第二个空挂钩，形状与画框挂环吻合。"
            },
            {
                "id": "frame-moved",
                "label": "移开的画框",
                "kind": "frame",
                "x": 0.82,
                "y": 0.35,
                "w": 0.25,
                "h": 0.28,
                "visibleWhen": [
                    "move"
                ]
            },
            {
                "id": "key",
                "label": "墙上钥匙",
                "kind": "key",
                "x": 0.49,
                "y": 0.39,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "move",
                    "peel"
                ],
                "hiddenWhen": [
                    "unlock"
                ]
            },
            {
                "id": "lock",
                "label": "出口锁",
                "kind": "lock",
                "x": 0.73,
                "y": 0.77,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "unlock"
                ]
            },
            {
                "id": "latch",
                "label": "画框安全扣",
                "kind": "clip",
                "x": 0.48,
                "y": 0.17,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "latch"
                ],
                "description": "画框上边有一枚防跌安全扣，向上拨才可以取下。",
                "art": "clip"
            },
            {
                "id": "key-cover",
                "label": "钥匙上的封纸",
                "kind": "paper",
                "x": 0.49,
                "y": 0.39,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "move"
                ],
                "hiddenWhen": [
                    "peel"
                ],
                "art": "paper-scrap",
                "description": "钥匙外面包着一层容易撕下的保护纸。"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "plaque",
                "action": "scrub",
                "requires": [],
                "feedback": "拭去说明牌上的灰，背面二字与一个小箭头显露出来。",
                "hints": [
                    "说明牌积了一层灰。",
                    "先擦净它，箭头才完整。",
                    "来回擦拭说明牌。"
                ],
                "minDistance": 0.35
            },
            {
                "id": "latch",
                "source": "latch",
                "action": "swipe",
                "requires": [
                    "read"
                ],
                "feedback": "安全扣向上打开，画框现在可以移走。",
                "hints": [
                    "画框被什么固定住？",
                    "上沿的扣子需要向上打开。",
                    "向上滑动画框安全扣。"
                ],
                "direction": "up"
            },
            {
                "id": "move",
                "source": "frame",
                "action": "drag",
                "target": "hook",
                "requires": [
                    "read",
                    "latch"
                ],
                "feedback": "把画框挂到旁边，背后墙上的钥匙露了出来。",
                "hints": [
                    "画面里找不到，就看看背后。",
                    "旁边的空挂钩可以暂时挂画。",
                    "把可移动画框拖到空挂钩。"
                ]
            },
            {
                "id": "peel",
                "source": "key-cover",
                "action": "swipe",
                "requires": [
                    "move"
                ],
                "feedback": "保护纸被轻轻撕开，铜钥匙露了出来。",
                "hints": [
                    "钥匙还包在保护纸里。",
                    "顺着纸的卷边剥开。",
                    "向右滑动保护纸。"
                ],
                "direction": "right"
            },
            {
                "id": "unlock",
                "source": "key",
                "action": "drag",
                "target": "lock",
                "requires": [
                    "move",
                    "peel"
                ],
                "feedback": "钥匙打开出口，画框背后还留着一张钟楼地图。",
                "hints": [
                    "找到钥匙的用途。",
                    "出口锁还没有打开。",
                    "把墙上钥匙拖到出口锁。"
                ]
            }
        ],
        "ending": "画家的谜题通过了。他请侦探在午夜前赶到老钟楼。",
        "mechanism": "画外空间与背面机关",
        "legacyInspiration": "旧第3/30关：遮挡揭示后解锁新的操作区域",
        "timeLimitSeconds": 250,
        "sceneCaption": "画展出口的钥匙不在画里。"
    }),
    make({
        "id": 6,
        "title": "午夜钟楼",
        "category": "综合",
        "background": "clocktower",
        "story": "钟楼停在十一点五十五分。天亮前必须敲响钟声，为迷路的小猫指路。",
        "goal": "修好钟楼，让报时钟响起",
        "objects": [
            {
                "id": "note",
                "label": "维修记录",
                "kind": "letter",
                "x": 0.18,
                "y": 0.31,
                "w": 0.15,
                "h": 0.15,
                "description": "记录写着：先接电，再装齿轮；长针指向12时可拉铃。"
            },
            {
                "id": "cable",
                "label": "断开电线",
                "kind": "cable",
                "x": 0.21,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "power"
                ]
            },
            {
                "id": "socket",
                "label": "电源接口",
                "kind": "socket",
                "x": 0.47,
                "y": 0.72,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "power"
                ]
            },
            {
                "id": "gear",
                "label": "铜齿轮",
                "kind": "gear",
                "x": 0.79,
                "y": 0.72,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "gear"
                ]
            },
            {
                "id": "gear-slot",
                "label": "齿轮缺口",
                "kind": "gear",
                "x": 0.49,
                "y": 0.46,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "gear"
                ],
                "visibleWhen": [
                    "clean"
                ]
            },
            {
                "id": "clock",
                "label": "停摆钟面",
                "kind": "clock",
                "x": 0.5,
                "y": 0.2,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "gear"
                ],
                "hiddenWhen": [
                    "time"
                ]
            },
            {
                "id": "clock-midnight",
                "label": "午夜钟面",
                "kind": "clock",
                "x": 0.5,
                "y": 0.2,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "time"
                ]
            },
            {
                "id": "rope",
                "label": "报时拉绳",
                "kind": "rope",
                "x": 0.79,
                "y": 0.42,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "ring"
                ]
            },
            {
                "id": "bell",
                "label": "钟铃",
                "kind": "bell",
                "x": 0.8,
                "y": 0.2,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "ring"
                ]
            },
            {
                "id": "cobweb",
                "label": "齿轮槽蛛网",
                "kind": "dust",
                "x": 0.49,
                "y": 0.46,
                "w": 0.24,
                "h": 0.24,
                "hiddenWhen": [
                    "clean"
                ],
                "art": "dust",
                "description": "厚厚蛛网缠住齿轮槽，先清理才能装轮。"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "note",
                "action": "tap",
                "requires": [],
                "feedback": "维修顺序：接电→装齿轮→长针归12→拉铃。",
                "hints": [
                    "修理前先寻找操作依据。",
                    "墙边有一张维修记录。",
                    "点击维修记录。"
                ]
            },
            {
                "id": "power",
                "source": "cable",
                "action": "drag",
                "target": "socket",
                "requires": [
                    "read"
                ],
                "feedback": "电源接通，齿轮槽亮起微光。",
                "hints": [
                    "先恢复动力。",
                    "断线和接口形状相同。",
                    "把断开电线拖到电源接口。"
                ]
            },
            {
                "id": "clean",
                "source": "cobweb",
                "action": "scrub",
                "requires": [
                    "power"
                ],
                "feedback": "蛛网被清理干净，齿轮槽可以自由转动。",
                "hints": [
                    "新齿轮不能卡在蛛网里。",
                    "来回擦净槽口。",
                    "在齿轮槽的蛛网上来回擦拭。"
                ],
                "minDistance": 0.5
            },
            {
                "id": "gear",
                "source": "gear",
                "action": "drag",
                "target": "gear-slot",
                "requires": [
                    "power",
                    "clean"
                ],
                "feedback": "铜齿轮咬合，钟面的长针可以移动了。",
                "hints": [
                    "动力还需要传进钟表。",
                    "缺口的形状和铜齿轮一致。",
                    "把铜齿轮拖到齿轮缺口。"
                ]
            },
            {
                "id": "time",
                "source": "clock",
                "action": "swipe",
                "requires": [
                    "gear"
                ],
                "feedback": "分针前进一格，指向12，午夜到了。",
                "hints": [
                    "钟面停在十一点五十五。",
                    "让长针顺时针前进最后一格。",
                    "向右滑动停摆钟面的长针。"
                ],
                "direction": "right"
            },
            {
                "id": "ring",
                "source": "rope",
                "action": "tap",
                "requires": [
                    "time"
                ],
                "feedback": "当——！钟声越过屋顶，远处传来了猫咪的回应。",
                "hints": [
                    "最后还需要让钟声传出去。",
                    "旁边的拉绳连接着钟铃。",
                    "点击报时拉绳。"
                ]
            },
            {
                "id": "hold-bell",
                "source": "bell",
                "action": "hold",
                "requires": [
                    "ring"
                ],
                "feedback": "钟铃的余音稳定传开，远处的小猫循声回家。",
                "hints": [
                    "钟已经响起，要让声音传远一点。",
                    "稳住摆动的钟铃。",
                    "按住钟铃约一秒。"
                ],
                "durationMs": 900
            }
        ],
        "ending": "小猫们跟着钟声回到小镇。猫咪侦探社的第一章圆满结束！",
        "mechanism": "钟楼分阶段检修",
        "legacyInspiration": "旧第2关：同一场景由破损逐件变为修复状态",
        "timeLimitSeconds": 290,
        "sceneCaption": "钟楼停在十一点五十五分。"
    }),
    make({
        "id": 7,
        "title": "雨夜猫队",
        "category": "寻物",
        "background": "alley",
        "mechanism": "多目标遮挡寻猫",
        "legacyInspiration": "旧第3关：直接点击、滑动揭示与特殊目标混合",
        "sceneCaption": "雨棚下藏着四只不同花色的小猫。",
        "story": "雨越来越大，巡街小猫要把躲在巷子里的四位伙伴都找回来。耳朵、尾巴和水面上的倒影都是线索。",
        "goal": "找到并接回四只避雨的小猫",
        "timeLimitSeconds": 240,
        "objects": [
            {
                "id": "umbrella",
                "label": "大雨伞",
                "kind": "umbrella",
                "x": 0.17,
                "y": 0.18,
                "w": 0.26,
                "h": 0.24,
                "hiddenWhen": [
                    "shelter"
                ]
            },
            {
                "id": "shelter",
                "label": "屋檐下",
                "kind": "stand",
                "x": 0.5,
                "y": 0.2,
                "w": 0.26,
                "h": 0.2,
                "description": "先把雨伞撑在这里，救回的小猫才有干燥落脚处。"
            },
            {
                "id": "orange",
                "label": "橘猫尾巴",
                "kind": "cat",
                "x": 0.2,
                "y": 0.75,
                "w": 0.22,
                "h": 0.23,
                "visibleWhen": [
                    "shelter"
                ],
                "hiddenWhen": [
                    "orange"
                ],
                "art": "cat-orange"
            },
            {
                "id": "crate",
                "label": "倒扣木箱",
                "kind": "box",
                "x": 0.77,
                "y": 0.73,
                "w": 0.27,
                "h": 0.25,
                "hiddenWhen": [
                    "crate"
                ],
                "description": "木箱下面伸出一截黑尾巴。"
            },
            {
                "id": "black",
                "label": "箱下黑猫",
                "kind": "cat",
                "x": 0.77,
                "y": 0.72,
                "w": 0.24,
                "h": 0.24,
                "visibleWhen": [
                    "crate"
                ],
                "hiddenWhen": [
                    "black"
                ],
                "art": "cat-black"
            },
            {
                "id": "curtain",
                "label": "旧布帘",
                "kind": "curtain",
                "x": 0.76,
                "y": 0.4,
                "w": 0.25,
                "h": 0.28,
                "hiddenWhen": [
                    "curtain"
                ],
                "description": "布帘后有灰色耳朵在动。"
            },
            {
                "id": "gray",
                "label": "布帘灰猫",
                "kind": "cat",
                "x": 0.76,
                "y": 0.42,
                "w": 0.24,
                "h": 0.25,
                "visibleWhen": [
                    "curtain"
                ],
                "hiddenWhen": [
                    "gray"
                ],
                "art": "cat-gray"
            },
            {
                "id": "fog",
                "label": "起雾玻璃",
                "kind": "window",
                "x": 0.23,
                "y": 0.44,
                "w": 0.28,
                "h": 0.27,
                "hiddenWhen": [
                    "wipe"
                ],
                "art": "glass-fog",
                "description": "玻璃后的白色耳朵几乎融进雾气。"
            },
            {
                "id": "white",
                "label": "窗边白猫",
                "kind": "cat",
                "x": 0.23,
                "y": 0.44,
                "w": 0.24,
                "h": 0.24,
                "visibleWhen": [
                    "wipe"
                ],
                "hiddenWhen": [
                    "white"
                ],
                "art": "cat-white"
            },
            {
                "id": "family",
                "label": "集合的小猫",
                "kind": "cat",
                "x": 0.5,
                "y": 0.6,
                "w": 0.27,
                "h": 0.27,
                "visibleWhen": [
                    "orange",
                    "black",
                    "gray",
                    "white"
                ],
                "art": "cat-orange"
            }
        ],
        "steps": [
            {
                "id": "shelter",
                "source": "umbrella",
                "action": "drag",
                "target": "shelter",
                "requires": [],
                "feedback": "大伞撑在屋檐下，集合位置不再淋雨。",
                "hints": [
                    "先给大家找个避雨处。",
                    "大伞可以接在屋檐下面。",
                    "把大雨伞拖到屋檐下。"
                ]
            },
            {
                "id": "orange",
                "source": "orange",
                "action": "tap",
                "requires": [
                    "shelter"
                ],
                "feedback": "第一只橘猫跑进了大伞下面。",
                "hints": [
                    "地面上露出一截橘尾巴。",
                    "留意巷子左下角。",
                    "点击左下方的橘猫。"
                ]
            },
            {
                "id": "crate",
                "source": "crate",
                "action": "swipe",
                "requires": [
                    "shelter"
                ],
                "feedback": "木箱被挪开，黑猫探出脑袋。",
                "hints": [
                    "箱子下面有尾巴。",
                    "往右挪箱子。",
                    "向右滑动倒扣木箱。"
                ],
                "direction": "right"
            },
            {
                "id": "black",
                "source": "black",
                "action": "tap",
                "requires": [
                    "crate"
                ],
                "feedback": "黑猫抖抖毛，也跑到了伞下。",
                "hints": [
                    "木箱移开后露出了谁？",
                    "黑色耳朵正对着你。",
                    "点击露出的黑猫。"
                ]
            },
            {
                "id": "curtain",
                "source": "curtain",
                "action": "swipe",
                "requires": [
                    "shelter"
                ],
                "feedback": "布帘掀开，灰猫睁大了眼睛。",
                "hints": [
                    "布后有耳朵在动。",
                    "从下摆往上掀。",
                    "向上滑动旧布帘。"
                ],
                "direction": "up"
            },
            {
                "id": "gray",
                "source": "gray",
                "action": "tap",
                "requires": [
                    "curtain"
                ],
                "feedback": "灰猫钻出布帘，和伙伴会合。",
                "hints": [
                    "布帘后面的灰影是小猫。",
                    "小猫已经露出来了。",
                    "点击灰猫。"
                ]
            },
            {
                "id": "wipe",
                "source": "fog",
                "action": "scrub",
                "requires": [
                    "shelter"
                ],
                "feedback": "玻璃雾气被擦开，白猫终于看得清楚。",
                "hints": [
                    "白耳朵藏在雾里。",
                    "擦净玻璃可以看清。",
                    "在起雾玻璃上来回擦拭。"
                ],
                "minDistance": 0.45
            },
            {
                "id": "white",
                "source": "white",
                "action": "tap",
                "requires": [
                    "wipe"
                ],
                "feedback": "最后一只白猫加入，四个伙伴一个也没少。",
                "hints": [
                    "窗边还有最后一位伙伴。",
                    "白猫已经出现在干净玻璃前。",
                    "点击白猫。"
                ]
            }
        ],
        "ending": "四只不同花色的小猫挤在大伞下，巡街任务圆满完成。"
    }),
    make({
        "id": 8,
        "title": "阁楼回声",
        "category": "道具",
        "background": "attic",
        "story": "阁楼墙后有叫声。暖气管穿过墙体多个拐角，能把敲击声带到另一侧。",
        "goal": "借助声音找到墙后的幼猫",
        "objects": [
            {
                "id": "spoon",
                "label": "金属勺",
                "kind": "rod",
                "x": 0.18,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "echo"
                ]
            },
            {
                "id": "pipe",
                "label": "暖气管",
                "kind": "pipe",
                "x": 0.62,
                "y": 0.31,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "cat",
                "label": "猫助手",
                "kind": "cat",
                "x": 0.27,
                "y": 0.56,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "listen"
                ]
            },
            {
                "id": "vent",
                "label": "通风口",
                "kind": "gap",
                "x": 0.79,
                "y": 0.53,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "open"
                ],
                "visibleWhen": [
                    "web"
                ]
            },
            {
                "id": "screwdriver",
                "label": "螺丝刀",
                "kind": "rod",
                "x": 0.5,
                "y": 0.79,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "open"
                ]
            },
            {
                "id": "kitten",
                "label": "墙后幼猫",
                "kind": "cat",
                "x": 0.78,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "open"
                ]
            },
            {
                "id": "web",
                "label": "格栅蛛网",
                "kind": "dust",
                "x": 0.79,
                "y": 0.53,
                "w": 0.24,
                "h": 0.24,
                "hiddenWhen": [
                    "web"
                ],
                "art": "dust"
            },
            {
                "id": "ladder",
                "label": "小梯子",
                "kind": "ladder",
                "x": 0.2,
                "y": 0.78,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "open"
                ],
                "hiddenWhen": [
                    "ladder"
                ],
                "art": "ladder"
            },
            {
                "id": "ledge",
                "label": "阁楼落脚处",
                "kind": "stand",
                "x": 0.78,
                "y": 0.8,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "open"
                ],
                "description": "幼猫不敢从高处直接跳下去。"
            }
        ],
        "steps": [
            {
                "id": "echo",
                "source": "spoon",
                "action": "drag",
                "target": "pipe",
                "requires": [],
                "feedback": "勺子敲响管道，右侧墙后传来微弱的喵声。",
                "hints": [
                    "声音能沿金属传递。",
                    "用金属物轻敲暖气管。",
                    "把金属勺拖到暖气管。"
                ]
            },
            {
                "id": "web",
                "source": "web",
                "action": "scrub",
                "requires": [
                    "echo"
                ],
                "feedback": "格栅上厚蛛网被清理，声音变得清楚。",
                "hints": [
                    "蛛网正盖住格栅。",
                    "擦开后才听得清。",
                    "在蛛网上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "listen",
                "source": "vent",
                "action": "hold",
                "requires": [
                    "echo",
                    "web"
                ],
                "feedback": "猫助手贴近通风口，确认叫声就在格栅后面。",
                "hints": [
                    "回声传到格栅后。",
                    "停下来听一会儿微弱的回应。",
                    "按住通风口约一秒。"
                ],
                "durationMs": 1000
            },
            {
                "id": "open",
                "source": "screwdriver",
                "action": "drag",
                "target": "vent",
                "requires": [
                    "listen"
                ],
                "feedback": "卸下格栅，幼猫终于钻了出来。",
                "hints": [
                    "格栅固定着，不能直接推开。",
                    "找能拧开螺丝的工具。",
                    "把螺丝刀拖到通风口。"
                ]
            },
            {
                "id": "ladder",
                "source": "ladder",
                "action": "drag",
                "target": "ledge",
                "requires": [
                    "open"
                ],
                "feedback": "小梯子搭好，幼猫顺着梯子一步步爬回地面。",
                "hints": [
                    "通道打开了，但幼猫还在高处。",
                    "给它搭一条能走下来的路。",
                    "把小梯子拖到阁楼落脚处。"
                ]
            }
        ],
        "ending": "幼猫获救，阁楼以后会加装安全网。",
        "mechanism": "声源定位与通道救援",
        "legacyInspiration": "旧第7/45关：确认藏身处后按条件逐段解除阻挡",
        "timeLimitSeconds": 250,
        "sceneCaption": "阁楼墙后有叫声。"
    }),
    make({
        "id": 9,
        "title": "停摆的花钟",
        "category": "机关",
        "background": "sunroom",
        "story": "花园的小门只会在花钟开花时打开。泥土干了，屋顶的遮棚也忘记收起。",
        "goal": "让花钟重新开花",
        "objects": [
            {
                "id": "can",
                "label": "水壶",
                "kind": "water",
                "x": 0.19,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "water"
                ]
            },
            {
                "id": "soil",
                "label": "干燥花盆",
                "kind": "plant",
                "x": 0.51,
                "y": 0.6,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "weed"
                ]
            },
            {
                "id": "awning",
                "label": "遮阳棚",
                "kind": "curtain",
                "x": 0.56,
                "y": 0.19,
                "w": 0.4,
                "h": 0.15,
                "hiddenWhen": [
                    "sun"
                ]
            },
            {
                "id": "clock",
                "label": "花钟表盘",
                "kind": "clock",
                "x": 0.79,
                "y": 0.58,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "set"
                ]
            },
            {
                "id": "flower",
                "label": "盛开的花钟",
                "kind": "flower",
                "x": 0.51,
                "y": 0.43,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "set",
                    "polish"
                ],
                "art": "plant-bloom"
            },
            {
                "id": "weeds",
                "label": "缠绕的杂草",
                "kind": "plant",
                "x": 0.51,
                "y": 0.6,
                "w": 0.27,
                "h": 0.29,
                "hiddenWhen": [
                    "weed"
                ],
                "art": "plant-wilted",
                "description": "杂草缠在花盆里，会抢走刚浇下的水。"
            },
            {
                "id": "pollen",
                "label": "花瓣上的灰",
                "kind": "dust",
                "x": 0.51,
                "y": 0.43,
                "w": 0.25,
                "h": 0.22,
                "visibleWhen": [
                    "set"
                ],
                "hiddenWhen": [
                    "polish"
                ],
                "art": "dust"
            }
        ],
        "steps": [
            {
                "id": "weed",
                "source": "weeds",
                "action": "swipe",
                "requires": [],
                "feedback": "杂草被连根拔出，花盆露出了干裂土壤。",
                "hints": [
                    "花盆里有谁在和花苞争水？",
                    "把缠绕杂草向上拔。",
                    "向上滑动缠绕的杂草。"
                ],
                "direction": "up"
            },
            {
                "id": "water",
                "source": "can",
                "action": "drag",
                "target": "soil",
                "requires": [
                    "weed"
                ],
                "feedback": "泥土吸饱水，紧闭的花苞抬起了头。",
                "hints": [
                    "先看看花缺少了什么。",
                    "泥土干裂了。",
                    "把水壶拖到干燥花盆。"
                ]
            },
            {
                "id": "sun",
                "source": "awning",
                "action": "swipe",
                "requires": [],
                "feedback": "遮棚收起，阳光照上花盆。",
                "hints": [
                    "阳光被上面的棚挡住。",
                    "沿折叠方向收起遮棚。",
                    "向上滑动遮阳棚。"
                ],
                "direction": "up"
            },
            {
                "id": "set",
                "source": "clock",
                "action": "tap",
                "requires": [
                    "water",
                    "sun"
                ],
                "feedback": "花钟归到正午刻度，花瓣依次展开，小门打开。",
                "hints": [
                    "水和阳光齐了，还差时间。",
                    "把花钟调到阳光最好的正午。",
                    "点击花钟表盘。"
                ]
            },
            {
                "id": "polish",
                "source": "pollen",
                "action": "scrub",
                "requires": [
                    "set"
                ],
                "feedback": "擦净花瓣上的薄灰，花钟亮起柔和光芒，花园小门打开。",
                "hints": [
                    "花苞展开后，花瓣还蒙着灰。",
                    "轻轻来回擦净。",
                    "在花钟花瓣的灰尘上来回擦拭。"
                ],
                "minDistance": 0.35
            }
        ],
        "ending": "花香引来了蝴蝶，猫咪们顺利进入花园。",
        "mechanism": "多条件花园修复",
        "legacyInspiration": "旧第2/42关：不同道具逐项改变环境，统一达到目标",
        "timeLimitSeconds": 250,
        "sceneCaption": "花园的小门只会在花钟开花时打开。"
    }),
    make({
        "id": 10,
        "title": "谁动了车票",
        "category": "推理",
        "background": "train",
        "story": "十点的末班渡船车票不见了。失物箱的记录显示，有人在九点五十拿走了它。",
        "goal": "用时间和物证找出代领车票的人",
        "objects": [
            {
                "id": "log",
                "label": "代领记录",
                "kind": "letter",
                "x": 0.2,
                "y": 0.29,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "clock",
                "label": "站钟",
                "kind": "clock",
                "x": 0.75,
                "y": 0.2,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "clean-clock"
                ]
            },
            {
                "id": "fiber",
                "label": "蓝色线头",
                "kind": "rope",
                "x": 0.48,
                "y": 0.72,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "scarf",
                "label": "蓝围巾客",
                "kind": "suspect",
                "x": 0.21,
                "y": 0.53,
                "w": 0.15,
                "h": 0.15,
                "description": "围巾缺了线，九点四十已在站内，符合代领时间。先看完记录再判断。"
            },
            {
                "id": "red",
                "label": "红衣客",
                "kind": "suspect",
                "x": 0.51,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "description": "红衣客九点五十五才进站，晚于九点五十的代领记录。"
            },
            {
                "id": "green",
                "label": "绿帽客",
                "kind": "suspect",
                "x": 0.81,
                "y": 0.53,
                "w": 0.15,
                "h": 0.15,
                "description": "绿帽客九点三十就离站，未在代领时刻出现，衣服也没有蓝线。"
            },
            {
                "id": "station-dust",
                "label": "站钟玻璃薄灰",
                "kind": "dust",
                "x": 0.75,
                "y": 0.2,
                "w": 0.22,
                "h": 0.22,
                "hiddenWhen": [
                    "clean-clock"
                ],
                "art": "dust"
            },
            {
                "id": "ticket",
                "label": "找回的车票",
                "kind": "ticket",
                "x": 0.5,
                "y": 0.82,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "choose"
                ],
                "hiddenWhen": [
                    "return-ticket"
                ],
                "art": "ticket"
            },
            {
                "id": "guest",
                "label": "等候的失主",
                "kind": "person",
                "x": 0.17,
                "y": 0.82,
                "w": 0.2,
                "h": 0.2,
                "visibleWhen": [
                    "choose"
                ]
            }
        ],
        "steps": [
            {
                "id": "log",
                "source": "log",
                "action": "tap",
                "requires": [],
                "feedback": "记录：代领时刻9:50；红衣客9:55进站，绿帽客9:30离站。",
                "hints": [
                    "先确定票是什么时候被拿走的。",
                    "失物箱留有代领记录。",
                    "点击代领记录。"
                ]
            },
            {
                "id": "clean-clock",
                "source": "station-dust",
                "action": "scrub",
                "requires": [],
                "feedback": "站钟玻璃擦亮，进站时间刻度清晰了。",
                "hints": [
                    "要校时先看清钟。",
                    "擦亮钟面玻璃。",
                    "在站钟的灰上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "clock",
                "source": "clock",
                "action": "tap",
                "requires": [
                    "clean-clock"
                ],
                "feedback": "站钟校时正常，记录里的时间可靠。蓝围巾客9:40已进站。",
                "hints": [
                    "时间证据是否可信？",
                    "核对站钟与进站时间。",
                    "点击站钟。"
                ]
            },
            {
                "id": "fiber",
                "source": "fiber",
                "action": "hold",
                "requires": [],
                "feedback": "箱沿留着蓝色线头，和蓝围巾缺口完全一致。",
                "hints": [
                    "蓝色线头缠在箱角。",
                    "稳稳捏住后才能看清编法。",
                    "按住蓝色线头约一秒。"
                ],
                "durationMs": 900
            },
            {
                "id": "choose",
                "source": "scarf",
                "action": "tap",
                "requires": [
                    "log",
                    "clock",
                    "fiber"
                ],
                "feedback": "蓝围巾客有时间代领，线头也吻合。",
                "hints": [
                    "同时满足时间和线头证据的是谁？",
                    "九点五十在站内，还戴着蓝围巾。",
                    "点击蓝围巾客。"
                ]
            },
            {
                "id": "return-ticket",
                "source": "ticket",
                "action": "drag",
                "target": "guest",
                "requires": [
                    "choose"
                ],
                "feedback": "代领人交出票根，和失主手中的半张票完整吻合。",
                "hints": [
                    "找到代领者后，还要确认票属于谁。",
                    "失主握着相同图案的票根。",
                    "把找回的车票拖给等候的失主。"
                ]
            }
        ],
        "ending": "他是好心代领，正等失主回来。车票终于物归原主。",
        "mechanism": "时间校验与身份排除",
        "legacyInspiration": "旧第21关：对角色和随身物件做具体检查后排除",
        "timeLimitSeconds": 270,
        "sceneCaption": "十点的末班渡船车票不见了。"
    }),
    make({
        "id": 11,
        "title": "倒着看的招牌",
        "category": "脑洞",
        "background": "gallery",
        "story": "箱子的符号看起来全是反的。旁边招牌写着：“从镜中的方向读。”",
        "goal": "借助镜子读出符号顺序",
        "objects": [
            {
                "id": "sign",
                "label": "镜像招牌",
                "kind": "letter",
                "x": 0.49,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "mirror",
                "label": "手镜",
                "kind": "mirror",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "reflect"
                ],
                "visibleWhen": [
                    "polish"
                ]
            },
            {
                "id": "code",
                "label": "反写符号",
                "kind": "paper",
                "x": 0.76,
                "y": 0.4,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "moon",
                "label": "月亮钮",
                "kind": "moon",
                "x": 0.3,
                "y": 0.58,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "paw",
                "label": "猫爪钮",
                "kind": "paw",
                "x": 0.52,
                "y": 0.58,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "star",
                "label": "星星钮",
                "kind": "star",
                "x": 0.75,
                "y": 0.58,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "mirror-dust",
                "label": "镜面灰尘",
                "kind": "dust",
                "x": 0.2,
                "y": 0.75,
                "w": 0.2,
                "h": 0.23,
                "hiddenWhen": [
                    "polish"
                ],
                "art": "dust"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "sign",
                "action": "swipe",
                "requires": [],
                "feedback": "遮住招牌的卷纸展开，镜中的方向四字露出。",
                "hints": [
                    "招牌上还有卷边。",
                    "先把卷边拉下来。",
                    "向下滑动镜像招牌。"
                ],
                "direction": "down"
            },
            {
                "id": "polish",
                "source": "mirror-dust",
                "action": "scrub",
                "requires": [
                    "read"
                ],
                "feedback": "手镜擦亮，反写的符号能清晰倒映出来。",
                "hints": [
                    "镜子蒙着灰，照不清。",
                    "来回擦亮手镜。",
                    "在镜面灰尘上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "reflect",
                "source": "mirror",
                "action": "drag",
                "target": "code",
                "requires": [
                    "read",
                    "polish"
                ],
                "feedback": "镜中符号清晰了：月亮→猫爪→星星。",
                "hints": [
                    "反写符号需要反射一次。",
                    "手镜能还原方向。",
                    "把手镜拖到反写符号。"
                ]
            },
            {
                "id": "moon",
                "source": "moon",
                "action": "tap",
                "requires": [
                    "reflect"
                ],
                "feedback": "月亮钮亮起。下一个是猫爪。",
                "hints": [
                    "按镜中顺序输入。",
                    "第一个是夜空中弯弯的符号。",
                    "点击月亮钮。"
                ]
            },
            {
                "id": "paw",
                "source": "paw",
                "action": "tap",
                "requires": [
                    "moon"
                ],
                "feedback": "猫爪钮亮起。最后是星星。",
                "hints": [
                    "顺着刚才看到的顺序。",
                    "第二个是猫留下的印记。",
                    "点击猫爪钮。"
                ]
            },
            {
                "id": "star",
                "source": "star",
                "action": "tap",
                "requires": [
                    "paw"
                ],
                "feedback": "星星亮起，收藏箱打开了。",
                "hints": [
                    "还剩最后一个符号。",
                    "月亮和猫爪后面是星星。",
                    "点击星星钮。"
                ]
            }
        ],
        "ending": "箱中是一张倒印版画，画家终于找回了展览作品。",
        "mechanism": "镜像还原与图形顺序",
        "legacyInspiration": "旧第30/39关：先揭示规则，再进行实际顺序机关",
        "timeLimitSeconds": 270,
        "sceneCaption": "箱子的符号看起来全是反的。"
    }),
    make({
        "id": 12,
        "title": "失踪的末班车",
        "category": "顺序",
        "background": "train",
        "story": "末班车还在隧道里等信号。控制箱没电，轨道开关停在维修支线上。",
        "goal": "恢复信号，让末班车安全进站",
        "objects": [
            {
                "id": "battery",
                "label": "备用电池",
                "kind": "battery",
                "x": 0.18,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "power"
                ]
            },
            {
                "id": "box",
                "label": "控制箱",
                "kind": "socket",
                "x": 0.51,
                "y": 0.69,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "map",
                "label": "轨道图",
                "kind": "letter",
                "x": 0.21,
                "y": 0.27,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "switch",
                "label": "支线开关",
                "kind": "switch",
                "x": 0.79,
                "y": 0.48,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "branch"
                ]
            },
            {
                "id": "signal",
                "label": "信号灯",
                "kind": "lamp",
                "x": 0.51,
                "y": 0.27,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "branch",
                "label": "轨道断枝",
                "kind": "rod",
                "x": 0.79,
                "y": 0.48,
                "w": 0.27,
                "h": 0.17,
                "hiddenWhen": [
                    "branch"
                ],
                "description": "断枝正卡在道岔上，不能直接扳动开关。"
            },
            {
                "id": "train",
                "label": "等待的小列车",
                "kind": "box",
                "x": 0.21,
                "y": 0.52,
                "w": 0.26,
                "h": 0.22,
                "visibleWhen": [
                    "signal"
                ],
                "art": "train"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "map",
                "action": "tap",
                "requires": [],
                "feedback": "轨道图：先通电，切回主线，最后亮绿灯。",
                "hints": [
                    "车站设备有安全操作顺序。",
                    "控制箱旁有轨道图。",
                    "点击轨道图。"
                ]
            },
            {
                "id": "power",
                "source": "battery",
                "action": "drag",
                "target": "box",
                "requires": [
                    "read"
                ],
                "feedback": "控制箱通电，支线开关恢复响应。",
                "hints": [
                    "控制箱先要有电。",
                    "备用电池的接头正好匹配。",
                    "把备用电池拖到控制箱。"
                ]
            },
            {
                "id": "branch",
                "source": "branch",
                "action": "swipe",
                "requires": [
                    "power"
                ],
                "feedback": "断枝移出轨道，道岔终于能活动。",
                "hints": [
                    "道岔为什么扳不动？",
                    "把卡住的断枝往右挪开。",
                    "向右滑动轨道断枝。"
                ],
                "direction": "right"
            },
            {
                "id": "route",
                "source": "switch",
                "action": "swipe",
                "requires": [
                    "power",
                    "branch"
                ],
                "feedback": "道岔切回主线，维修支线已隔离。",
                "hints": [
                    "主线在开关左侧。",
                    "把道岔扳回主线。",
                    "向左滑动支线开关。"
                ],
                "direction": "left"
            },
            {
                "id": "signal",
                "source": "signal",
                "action": "tap",
                "requires": [
                    "route"
                ],
                "feedback": "绿灯亮起，末班车缓缓驶入站台。",
                "hints": [
                    "路线正确后才可以放行。",
                    "打开进站信号。",
                    "点击信号灯。"
                ]
            },
            {
                "id": "depart",
                "source": "train",
                "action": "hold",
                "requires": [
                    "signal"
                ],
                "feedback": "列车确认绿灯与主线后缓缓驶入站台。",
                "hints": [
                    "信号已绿，需要给司机一个稳定指示。",
                    "按住列车片刻完成放行确认。",
                    "按住等待的小列车约一秒。"
                ],
                "durationMs": 900
            }
        ],
        "ending": "等车的猫咪终于回家。司机向侦探社按响了感谢的喇叭。",
        "mechanism": "铁路排障与安全时序",
        "legacyInspiration": "旧第17/18关：先解除线路风险，最后才允许放行",
        "timeLimitSeconds": 270,
        "sceneCaption": "末班车还在隧道里等信号。"
    }),
    make({
        "id": 13,
        "title": "小猫的新家",
        "category": "修复",
        "background": "attic",
        "mechanism": "多目标旧屋修复",
        "legacyInspiration": "旧第2关：逐件改善屋内环境，旧态与新态对应显示",
        "sceneCaption": "漏雨、破床和暗灯让阁楼无法住人。",
        "story": "刚获救的小猫想住进侦探社阁楼。屋顶漏雨，窗台积灰，小床也坏了，先帮它整理出真正能住的小窝。",
        "goal": "修好阁楼，让小猫安心入住",
        "timeLimitSeconds": 300,
        "objects": [
            {
                "id": "leak",
                "label": "漏雨屋顶",
                "kind": "water",
                "x": 0.73,
                "y": 0.2,
                "w": 0.25,
                "h": 0.25,
                "hiddenWhen": [
                    "roof"
                ],
                "art": "water"
            },
            {
                "id": "board",
                "label": "屋顶木板",
                "kind": "paper",
                "x": 0.18,
                "y": 0.83,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "roof"
                ],
                "art": "plank"
            },
            {
                "id": "window",
                "label": "积灰窗玻璃",
                "kind": "window",
                "x": 0.2,
                "y": 0.33,
                "w": 0.26,
                "h": 0.27,
                "hiddenWhen": [
                    "window"
                ],
                "art": "glass-fog"
            },
            {
                "id": "clear-window",
                "label": "明亮的窗",
                "kind": "window",
                "x": 0.2,
                "y": 0.33,
                "w": 0.26,
                "h": 0.27,
                "visibleWhen": [
                    "window"
                ],
                "art": "glass-clean"
            },
            {
                "id": "bed",
                "label": "损坏的小床",
                "kind": "bed",
                "x": 0.7,
                "y": 0.7,
                "w": 0.3,
                "h": 0.28,
                "hiddenWhen": [
                    "bed"
                ],
                "art": "bed-broken"
            },
            {
                "id": "hammer",
                "label": "小木锤",
                "kind": "rod",
                "x": 0.41,
                "y": 0.84,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "bed"
                ],
                "art": "hammer"
            },
            {
                "id": "good-bed",
                "label": "修好的小床",
                "kind": "bed",
                "x": 0.7,
                "y": 0.7,
                "w": 0.3,
                "h": 0.28,
                "visibleWhen": [
                    "bed"
                ],
                "art": "bed-fixed"
            },
            {
                "id": "lamp",
                "label": "没有灯泡的灯",
                "kind": "lamp",
                "x": 0.75,
                "y": 0.42,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "lamp"
                ]
            },
            {
                "id": "bulb",
                "label": "新灯泡",
                "kind": "lamp",
                "x": 0.61,
                "y": 0.85,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "lamp"
                ],
                "art": "bulb"
            },
            {
                "id": "warm-lamp",
                "label": "暖暖的小灯",
                "kind": "lamp",
                "x": 0.75,
                "y": 0.42,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "lamp"
                ]
            },
            {
                "id": "puddle",
                "label": "地面积水",
                "kind": "water",
                "x": 0.43,
                "y": 0.6,
                "w": 0.26,
                "h": 0.23,
                "hiddenWhen": [
                    "dry"
                ]
            },
            {
                "id": "blanket",
                "label": "干净小毯子",
                "kind": "cloth",
                "x": 0.84,
                "y": 0.84,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "blanket"
                ],
                "art": "cloth"
            },
            {
                "id": "cat",
                "label": "等候的小猫",
                "kind": "cat",
                "x": 0.19,
                "y": 0.62,
                "w": 0.25,
                "h": 0.28,
                "hiddenWhen": [
                    "settle"
                ],
                "art": "cat-orange"
            },
            {
                "id": "sleep-cat",
                "label": "入住的小猫",
                "kind": "cat",
                "x": 0.7,
                "y": 0.65,
                "w": 0.25,
                "h": 0.26,
                "visibleWhen": [
                    "settle"
                ],
                "art": "cat-orange"
            }
        ],
        "steps": [
            {
                "id": "roof",
                "source": "board",
                "action": "drag",
                "target": "leak",
                "requires": [],
                "feedback": "木板补好屋顶，雨水不再滴进阁楼。",
                "hints": [
                    "先处理不断出现的新雨水。",
                    "漏口需要一块合适木板。",
                    "把木板拖到屋顶漏水处。"
                ]
            },
            {
                "id": "window",
                "source": "window",
                "action": "scrub",
                "requires": [],
                "feedback": "擦净玻璃，阁楼透进明亮日光。",
                "hints": [
                    "窗外有光，但玻璃太脏。",
                    "来回擦净玻璃。",
                    "在积灰的窗上来回擦拭。"
                ],
                "minDistance": 0.5
            },
            {
                "id": "bed",
                "source": "hammer",
                "action": "drag",
                "target": "bed",
                "requires": [],
                "feedback": "床脚修稳，小床不再摇晃。",
                "hints": [
                    "小猫的床少了稳固支撑。",
                    "小木锤可以把松动床脚敲紧。",
                    "把小木锤拖到损坏的小床。"
                ]
            },
            {
                "id": "lamp",
                "source": "bulb",
                "action": "drag",
                "target": "lamp",
                "requires": [],
                "feedback": "新灯泡拧好，暖灯亮起来。",
                "hints": [
                    "晚上也需要一点光。",
                    "把新灯泡装上。",
                    "把新灯泡拖到没有灯泡的小灯。"
                ]
            },
            {
                "id": "dry",
                "source": "puddle",
                "action": "scrub",
                "requires": [
                    "roof"
                ],
                "feedback": "地面擦干，小猫不会再踩湿爪子。",
                "hints": [
                    "漏雨止住后才能擦干地面。",
                    "来回把积水擦去。",
                    "在地面积水上来回擦拭。"
                ],
                "minDistance": 0.6
            },
            {
                "id": "blanket",
                "source": "blanket",
                "action": "drag",
                "target": "good-bed",
                "requires": [
                    "bed",
                    "dry"
                ],
                "feedback": "小毯子铺平，柔软猫窝准备好了。",
                "hints": [
                    "修好的床还缺一层柔软垫子。",
                    "用干净小毯子铺床。",
                    "把小毯子拖到修好的床。"
                ]
            },
            {
                "id": "settle",
                "source": "cat",
                "action": "drag",
                "target": "good-bed",
                "requires": [
                    "roof",
                    "window",
                    "lamp",
                    "blanket"
                ],
                "feedback": "小猫走进新家，蜷在暖暖小床里。",
                "hints": [
                    "屋内各处都准备好了吗？",
                    "漏雨、窗、灯和床都修好后再入住。",
                    "把等候的小猫拖到小床上。"
                ]
            }
        ],
        "ending": "原来修复一个家，是让每个小角落都重新舒服起来。"
    }),
    make({
        "id": 14,
        "title": "风中的信",
        "category": "道具",
        "background": "alley",
        "story": "信落在栏杆外，手够不到。风扇能把它吹过来，但风也会把接信用的托盘掀翻。",
        "goal": "用风把信送回安全的托盘",
        "objects": [
            {
                "id": "stone",
                "label": "圆镇纸",
                "kind": "stone",
                "x": 0.2,
                "y": 0.77,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "weight"
                ]
            },
            {
                "id": "tray",
                "label": "轻托盘",
                "kind": "tray",
                "x": 0.5,
                "y": 0.72,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "fan",
                "label": "小风扇",
                "kind": "fan",
                "x": 0.19,
                "y": 0.38,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "place"
                ]
            },
            {
                "id": "base",
                "label": "栏杆风口",
                "kind": "stand",
                "x": 0.5,
                "y": 0.38,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "place"
                ]
            },
            {
                "id": "fan-set",
                "label": "就位的风扇",
                "kind": "fan",
                "x": 0.5,
                "y": 0.38,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "place"
                ]
            },
            {
                "id": "letter",
                "label": "栏杆外的信",
                "kind": "letter",
                "x": 0.79,
                "y": 0.55,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "blow"
                ],
                "visibleWhen": [
                    "dry-letter"
                ]
            },
            {
                "id": "safe-letter",
                "label": "接回的信",
                "kind": "letter",
                "x": 0.5,
                "y": 0.62,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "blow"
                ],
                "hiddenWhen": [
                    "deliver"
                ]
            },
            {
                "id": "wet-letter",
                "label": "信封上的雨水",
                "kind": "water",
                "x": 0.79,
                "y": 0.55,
                "w": 0.2,
                "h": 0.2,
                "hiddenWhen": [
                    "dry-letter"
                ],
                "art": "water"
            },
            {
                "id": "delivery",
                "label": "猫奶奶信箱",
                "kind": "box",
                "x": 0.2,
                "y": 0.2,
                "w": 0.24,
                "h": 0.24,
                "visibleWhen": [
                    "blow"
                ],
                "art": "mailbox"
            }
        ],
        "steps": [
            {
                "id": "weight",
                "source": "stone",
                "action": "drag",
                "target": "tray",
                "requires": [],
                "feedback": "镇纸压住托盘，风吹来时它也不会翻。",
                "hints": [
                    "先准备稳定的落点。",
                    "托盘太轻，需要压住。",
                    "把圆镇纸拖到轻托盘。"
                ]
            },
            {
                "id": "place",
                "source": "fan",
                "action": "drag",
                "target": "base",
                "requires": [],
                "feedback": "风扇对准栏杆外，吹来的方向正好通向托盘。",
                "hints": [
                    "怎样让远处的信自己过来？",
                    "把风扇摆到正确方向。",
                    "把小风扇拖到栏杆风口。"
                ]
            },
            {
                "id": "dry-letter",
                "source": "wet-letter",
                "action": "scrub",
                "requires": [],
                "feedback": "信封上的水珠擦去，纸张不再黏在栏杆上。",
                "hints": [
                    "信封为什么贴着栏杆不动？",
                    "先擦去让纸黏住的水。",
                    "在信封上的水珠处来回擦拭。"
                ],
                "minDistance": 0.35
            },
            {
                "id": "blow",
                "source": "fan-set",
                "action": "hold",
                "requires": [
                    "weight",
                    "place",
                    "dry-letter"
                ],
                "feedback": "风起，信轻轻飘落到稳稳的托盘里。",
                "hints": [
                    "纸张已松开，托盘也压稳了。",
                    "保持稳定的风比乱开关更有效。",
                    "按住就位的风扇约一秒。"
                ],
                "durationMs": 1100
            },
            {
                "id": "deliver",
                "source": "safe-letter",
                "action": "drag",
                "target": "delivery",
                "requires": [
                    "blow"
                ],
                "feedback": "找回的信放进猫奶奶信箱，封口保持完好。",
                "hints": [
                    "信回来了，还要送到收件人那里。",
                    "猫爪印信箱就在墙边。",
                    "把接回的信拖到信箱。"
                ]
            }
        ],
        "ending": "这是写给猫奶奶的信，封口上的小爪印完好无损。",
        "mechanism": "配重稳固与风力搬运",
        "legacyInspiration": "旧第1关：不同物品在整体受力中具有不同用途",
        "timeLimitSeconds": 250,
        "sceneCaption": "信落在栏杆外，手够不到。"
    }),
    make({
        "id": 15,
        "title": "温室迷雾",
        "category": "机关",
        "background": "sunroom",
        "story": "温室玻璃全是水汽，外面的送货牌看不清。地上还有一张潮湿的便条。",
        "goal": "清除水汽，读出送货地点",
        "objects": [
            {
                "id": "vent",
                "label": "天窗开关",
                "kind": "switch",
                "x": 0.77,
                "y": 0.2,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "vine"
                ]
            },
            {
                "id": "cloth",
                "label": "干抹布",
                "kind": "cloth",
                "x": 0.18,
                "y": 0.74,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "wipe"
                ],
                "decorative": true
            },
            {
                "id": "glass",
                "label": "起雾玻璃",
                "kind": "window",
                "x": 0.5,
                "y": 0.35,
                "w": 0.3,
                "h": 0.27,
                "hiddenWhen": [
                    "wipe"
                ]
            },
            {
                "id": "sign",
                "label": "清晰送货牌",
                "kind": "letter",
                "x": 0.5,
                "y": 0.35,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "wipe"
                ]
            },
            {
                "id": "note",
                "label": "潮湿便条",
                "kind": "paper",
                "x": 0.76,
                "y": 0.73,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "stuck",
                "label": "天窗上的藤蔓",
                "kind": "plant",
                "x": 0.77,
                "y": 0.2,
                "w": 0.22,
                "h": 0.23,
                "hiddenWhen": [
                    "vine"
                ],
                "art": "plant-wilted"
            },
            {
                "id": "crate",
                "label": "等待送货箱",
                "kind": "box",
                "x": 0.2,
                "y": 0.45,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "read"
                ],
                "hiddenWhen": [
                    "deliver"
                ]
            },
            {
                "id": "slot",
                "label": "东门第三格",
                "kind": "stand",
                "x": 0.78,
                "y": 0.48,
                "w": 0.22,
                "h": 0.22,
                "visibleWhen": [
                    "read"
                ],
                "description": "刻着三个小方格的送货架。"
            }
        ],
        "steps": [
            {
                "id": "vine",
                "source": "stuck",
                "action": "swipe",
                "requires": [],
                "feedback": "藤蔓拨开，天窗的把手露出来。",
                "hints": [
                    "天窗把手被藤蔓缠住。",
                    "先往右拨开藤蔓。",
                    "向右滑动天窗上的藤蔓。"
                ],
                "direction": "right"
            },
            {
                "id": "vent",
                "source": "vent",
                "action": "swipe",
                "requires": [
                    "vine"
                ],
                "feedback": "天窗打开，热湿空气排出去，玻璃不再反复起雾。",
                "hints": [
                    "温室里湿热空气出不去。",
                    "把天窗向上推。",
                    "向上滑动天窗开关。"
                ],
                "direction": "up"
            },
            {
                "id": "wipe",
                "source": "glass",
                "action": "scrub",
                "requires": [
                    "vent"
                ],
                "feedback": "干抹布擦净水汽，牌上显出“东门第三格”。",
                "hints": [
                    "通风后玻璃不再重新起雾。",
                    "来回擦去剩余水汽。",
                    "在起雾玻璃上来回擦拭。"
                ],
                "minDistance": 0.55
            },
            {
                "id": "read",
                "source": "sign",
                "action": "tap",
                "requires": [
                    "wipe"
                ],
                "feedback": "送货牌写着东门第三格，与便条上的“三格”印记吻合。",
                "hints": [
                    "读出完整地点，再与便条核对。",
                    "清晰的牌子给出了方向。",
                    "点击清晰的送货牌。"
                ]
            },
            {
                "id": "deliver",
                "source": "crate",
                "action": "drag",
                "target": "slot",
                "requires": [
                    "read"
                ],
                "feedback": "货箱放入对应三个小方格的格口，温室配送完成。",
                "hints": [
                    "牌子已经给出目的地。",
                    "找到刻着三个小方格的格口。",
                    "把等待送货箱拖到东门第三格。"
                ]
            }
        ],
        "ending": "货箱顺利送到，温室里的小苗终于有了新花盆。",
        "mechanism": "通风除雾与痕迹核对",
        "legacyInspiration": "旧第42关：消除源头与处理现状需分阶段进行",
        "timeLimitSeconds": 250,
        "sceneCaption": "温室玻璃全是水汽，外面的送货牌看不清。"
    }),
    make({
        "id": 16,
        "title": "午夜送货人",
        "category": "推理",
        "background": "market",
        "story": "午夜有人送来一箱猫粮，没有留下姓名。三位送货人中，谁是这位好心邻居？",
        "goal": "根据送货条件找到好心人",
        "objects": [
            {
                "id": "ticket",
                "label": "仓库出库单",
                "kind": "letter",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "track",
                "label": "单轮车印",
                "kind": "wheel",
                "x": 0.47,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "ribbon",
                "label": "黄色绑绳",
                "kind": "rope",
                "x": 0.79,
                "y": 0.27,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "mole",
                "label": "鼹鼠车夫",
                "kind": "suspect",
                "x": 0.19,
                "y": 0.54,
                "w": 0.15,
                "h": 0.15,
                "description": "鼹鼠使用双轮车，与现场单道车辙不符。"
            },
            {
                "id": "rabbit",
                "label": "兔子邮差",
                "kind": "suspect",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "description": "兔子有单轮车和黄绑绳，出库时间23:50。请先核实三条证据。"
            },
            {
                "id": "dog",
                "label": "小狗快递员",
                "kind": "suspect",
                "x": 0.81,
                "y": 0.54,
                "w": 0.15,
                "h": 0.15,
                "description": "小狗使用单轮车，但出库单写着它22点就下班了，绑绳也是蓝色。"
            },
            {
                "id": "token",
                "label": "感谢卡",
                "kind": "paper",
                "x": 0.5,
                "y": 0.88,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "choose"
                ],
                "hiddenWhen": [
                    "thanks"
                ],
                "art": "paper-letter"
            },
            {
                "id": "mailbox",
                "label": "邮差信箱",
                "kind": "box",
                "x": 0.83,
                "y": 0.79,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "choose"
                ],
                "art": "mailbox"
            }
        ],
        "steps": [
            {
                "id": "ticket",
                "source": "ticket",
                "action": "tap",
                "requires": [],
                "feedback": "午夜前最后一次出库是23:50，签的是兔子邮差；小狗22点已下班。",
                "hints": [
                    "先确定谁在午夜前还在工作。",
                    "仓库出库单有时间。",
                    "点击仓库出库单。"
                ]
            },
            {
                "id": "track",
                "source": "track",
                "action": "scrub",
                "requires": [],
                "feedback": "地面只有一条车辙，送货人使用单轮车，排除双轮车夫。",
                "hints": [
                    "车轮印被泥水盖住一半。",
                    "擦去薄泥才看得出轮子数量。",
                    "在单轮车印上来回擦拭。"
                ],
                "minDistance": 0.45
            },
            {
                "id": "ribbon",
                "source": "ribbon",
                "action": "hold",
                "requires": [],
                "feedback": "箱上的黄绑绳，与兔子邮差车上的绑绳同色同编法。",
                "hints": [
                    "绑绳的结很紧，拉扯会弄坏样本。",
                    "按住它片刻，对照编法。",
                    "按住黄色绑绳约一秒。"
                ],
                "durationMs": 900
            },
            {
                "id": "choose",
                "source": "rabbit",
                "action": "tap",
                "requires": [
                    "ticket",
                    "track",
                    "ribbon"
                ],
                "feedback": "工作时间、单轮车、黄绑绳同时指向兔子邮差。",
                "hints": [
                    "三项条件必须同时满足。",
                    "谁在23:50出库，还使用黄绳单轮车？",
                    "点击兔子邮差。"
                ]
            },
            {
                "id": "thanks",
                "source": "token",
                "action": "drag",
                "target": "mailbox",
                "requires": [
                    "choose"
                ],
                "feedback": "感谢卡放进邮差信箱，好心邻居收到猫咪们的回应。",
                "hints": [
                    "查明好心人后，也要把谢意送出。",
                    "邮差信箱能把卡片送到他手上。",
                    "把感谢卡拖到邮差信箱。"
                ]
            }
        ],
        "ending": "猫咪们画了一张感谢卡，放进兔子邮差的信箱。",
        "mechanism": "多目标痕迹清理与身份判断",
        "legacyInspiration": "旧第21关：通过工具和角色物件逐项排除",
        "timeLimitSeconds": 250,
        "sceneCaption": "午夜有人送来一箱猫粮，没有留下姓名。"
    }),
    make({
        "id": 17,
        "title": "月亮掉进井里",
        "category": "脑洞",
        "background": "gallery",
        "story": "画廊庭院里，小猫坚持月亮掉进了井里。水桶捞不上来，水面却总随着风改变样子。",
        "goal": "证明井里只是月亮的倒影",
        "objects": [
            {
                "id": "moon",
                "label": "井中月影",
                "kind": "moon",
                "x": 0.5,
                "y": 0.56,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "pebble",
                "label": "小石子",
                "kind": "stone",
                "x": 0.18,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "ripple"
                ]
            },
            {
                "id": "water",
                "label": "井水",
                "kind": "water",
                "x": 0.5,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "leaf"
                ]
            },
            {
                "id": "cover",
                "label": "半块井盖",
                "kind": "cover",
                "x": 0.78,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "cover"
                ]
            },
            {
                "id": "sky",
                "label": "天空月亮",
                "kind": "moon",
                "x": 0.72,
                "y": 0.2,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "cat",
                "label": "困惑小猫",
                "kind": "cat",
                "x": 0.2,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "leaf",
                "label": "漂在水面的叶",
                "kind": "leaf",
                "x": 0.5,
                "y": 0.72,
                "w": 0.2,
                "h": 0.2,
                "hiddenWhen": [
                    "leaf"
                ],
                "art": "leaf",
                "description": "浮叶遮住了小半水面，先拨开才能看清倒影。"
            }
        ],
        "steps": [
            {
                "id": "leaf",
                "source": "leaf",
                "action": "swipe",
                "requires": [],
                "feedback": "浮叶漂到边缘，完整月影显露在水面上。",
                "hints": [
                    "先让水面没有遮挡。",
                    "往右拨开浮叶。",
                    "向右滑动水面的叶子。"
                ],
                "direction": "right"
            },
            {
                "id": "ripple",
                "source": "pebble",
                "action": "drag",
                "target": "water",
                "requires": [
                    "leaf"
                ],
                "feedback": "石子激起波纹，月影碎开后又聚拢；真实月亮不会这样变化。",
                "hints": [
                    "先验证井里的东西是否实体。",
                    "轻微波纹会改变倒影。",
                    "把小石子拖到井水。"
                ]
            },
            {
                "id": "cover",
                "source": "cover",
                "action": "drag",
                "target": "moon",
                "requires": [
                    "ripple"
                ],
                "feedback": "井盖遮住反光，井中月亮消失了，天空的月亮还在。",
                "hints": [
                    "遮住水面，看看天空有没有变化。",
                    "井盖能挡住反射的光。",
                    "把半块井盖拖到井中月影。"
                ]
            },
            {
                "id": "sky",
                "source": "sky",
                "action": "hold",
                "requires": [
                    "cover"
                ],
                "feedback": "看，真正的月亮一直高挂夜空！小猫终于明白了。",
                "hints": [
                    "水里的月亮消失，天上的还在。",
                    "停留片刻，对照天空与井水。",
                    "按住天空月亮约一秒。"
                ],
                "durationMs": 900
            },
            {
                "id": "reassure",
                "source": "cat",
                "action": "hold",
                "requires": [
                    "sky"
                ],
                "feedback": "小猫明白井里只是倒影，终于放下了水桶。",
                "hints": [
                    "小猫还担心月亮没有回家。",
                    "陪它一起看过天空，安抚一下。",
                    "按住困惑的小猫约一秒。"
                ],
                "durationMs": 900
            }
        ],
        "ending": "猫咪侦探社给小猫上了第一堂关于倒影的科学课。",
        "mechanism": "倒影实验与安抚理解",
        "legacyInspiration": "旧第25关：通过前后对照改变判断，转为无危险的科学小故事",
        "timeLimitSeconds": 250,
        "sceneCaption": "画廊庭院里，小猫坚持月亮掉进了井里。"
    }),
    make({
        "id": 18,
        "title": "灯塔最后一夜",
        "category": "综合",
        "background": "harbor",
        "story": "暴风雨前，归航的小船需要灯塔。备用电源可用，但灯泡失踪，反光镜也歪了。",
        "goal": "修复灯塔并发出三次安全信号",
        "objects": [
            {
                "id": "manual",
                "label": "值守手册",
                "kind": "letter",
                "x": 0.18,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "battery",
                "label": "蓄电池",
                "kind": "battery",
                "x": 0.18,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "power"
                ]
            },
            {
                "id": "socket",
                "label": "备用电源口",
                "kind": "socket",
                "x": 0.47,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "power"
                ]
            },
            {
                "id": "cabinet",
                "label": "备件柜",
                "kind": "box",
                "x": 0.8,
                "y": 0.7,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "cabinet"
                ]
            },
            {
                "id": "bulb",
                "label": "备用灯泡",
                "kind": "lamp",
                "x": 0.8,
                "y": 0.7,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "cabinet"
                ],
                "hiddenWhen": [
                    "bulb"
                ]
            },
            {
                "id": "lamp",
                "label": "空灯座",
                "kind": "lamp",
                "x": 0.5,
                "y": 0.29,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "bulb"
                ]
            },
            {
                "id": "mirror",
                "label": "偏转反光镜",
                "kind": "mirror",
                "x": 0.78,
                "y": 0.35,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "polish"
                ]
            },
            {
                "id": "signal",
                "label": "信号按钮",
                "kind": "switch",
                "x": 0.49,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "salt",
                "label": "反光镜盐雾",
                "kind": "dust",
                "x": 0.78,
                "y": 0.35,
                "w": 0.22,
                "h": 0.24,
                "hiddenWhen": [
                    "polish"
                ],
                "art": "glass-fog"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "manual",
                "action": "tap",
                "requires": [],
                "feedback": "手册：接备用电源→装灯泡→镜面朝海→按三次信号键。",
                "hints": [
                    "修灯塔前先确认操作方法。",
                    "值守手册记录了应急流程。",
                    "点击值守手册。"
                ]
            },
            {
                "id": "power",
                "source": "battery",
                "action": "drag",
                "target": "socket",
                "requires": [
                    "read"
                ],
                "feedback": "备用电源接通，灯塔电路恢复。",
                "hints": [
                    "先恢复供电。",
                    "蓄电池接到备用电源口。",
                    "把蓄电池拖到备用电源口。"
                ]
            },
            {
                "id": "cabinet",
                "source": "cabinet",
                "action": "swipe",
                "requires": [],
                "feedback": "备件柜里找到一只完好的灯泡。",
                "hints": [
                    "备件柜的门是向右滑开的。",
                    "沿门轨推开。",
                    "向右滑动备件柜。"
                ],
                "direction": "right"
            },
            {
                "id": "bulb",
                "source": "bulb",
                "action": "drag",
                "target": "lamp",
                "requires": [
                    "power",
                    "cabinet"
                ],
                "feedback": "灯泡亮了，但光还朝着岸上的墙。",
                "hints": [
                    "电源有了，还需要发光部件。",
                    "把备用灯泡装到空灯座。",
                    "把备用灯泡拖到空灯座。"
                ]
            },
            {
                "id": "polish",
                "source": "salt",
                "action": "scrub",
                "requires": [
                    "bulb"
                ],
                "feedback": "盐雾擦净，反光镜重新明亮。",
                "hints": [
                    "灯亮了，镜面却一片模糊。",
                    "擦掉海风留下的盐雾。",
                    "在反光镜上来回擦拭。"
                ],
                "minDistance": 0.55
            },
            {
                "id": "mirror",
                "source": "mirror",
                "action": "swipe",
                "requires": [
                    "bulb",
                    "polish"
                ],
                "feedback": "反光镜转向海面，光束对准了航道。",
                "hints": [
                    "光仍朝着岸墙。",
                    "把反光镜偏向右侧海面。",
                    "向右滑动反光镜。"
                ],
                "direction": "right"
            },
            {
                "id": "flash1",
                "source": "signal",
                "action": "tap",
                "requires": [
                    "mirror"
                ],
                "feedback": "第一束信号划过海面。",
                "hints": [
                    "方向正确，可以发送信号了。",
                    "手册要求三次。",
                    "点击信号按钮，发送第一次。"
                ]
            },
            {
                "id": "flash2",
                "source": "signal",
                "action": "hold",
                "requires": [
                    "flash1"
                ],
                "feedback": "第二束信号划过海面。",
                "hints": [
                    "第二束是长信号。",
                    "保持信号键一小会儿。",
                    "按住信号按钮一秒。"
                ],
                "durationMs": 1000
            },
            {
                "id": "flash3",
                "source": "signal",
                "action": "tap",
                "requires": [
                    "flash2"
                ],
                "feedback": "第三束信号亮起，小船回应了灯光。",
                "hints": [
                    "最后一次信号。",
                    "已经两次，还差一次。",
                    "第三次点击信号按钮。"
                ]
            }
        ],
        "ending": "所有小船安全归航。猫咪侦探社收到整座小镇的感谢，新的委托还会继续！",
        "mechanism": "多阶段灯塔救援",
        "legacyInspiration": "旧第43/61关：供能、解除障碍与最终救援共同收束",
        "timeLimitSeconds": 330,
        "sceneCaption": "暴风雨前，归航的小船需要灯塔。"
    })
];

export const CASE_DATA: readonly CaseDefinition[] = [...INITIAL_CASES, ...CASES_19_40, ...CASES_41_60, ...CASES_61_80];
