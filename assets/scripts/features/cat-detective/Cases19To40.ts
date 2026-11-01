import { make, CaseDefinition } from './CaseTypes';

/** 糖果美术版：第19—40关，以场景动作和多阶段目标组织谜题。 */
export const CASES_19_40: readonly CaseDefinition[] = [
    make({
        "id": 19,
        "title": "不该响的门铃",
        "category": "因果",
        "background": "workshop",
        "story": "雨停了，门铃还在自己响。每次叮咚之前，屋檐都会滴下一滴水。",
        "goal": "找出误响原因并修好门铃",
        "objects": [
            {
                "id": "drain",
                "label": "排水口",
                "kind": "gap",
                "x": 0.2,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "落叶堵住排水口，水才会沿门框流向铃线。"
            },
            {
                "id": "joint",
                "label": "潮湿接头",
                "kind": "wire",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "wipe"
                ],
                "description": "水滴同时碰到两根裸线，门铃就响了。必须先改变水路。"
            },
            {
                "id": "dry",
                "label": "干燥接头",
                "kind": "wire",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "wipe"
                ],
                "hiddenWhen": [
                    "cover"
                ]
            },
            {
                "id": "sealed",
                "label": "绝缘接头",
                "kind": "box",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "cover"
                ]
            },
            {
                "id": "cloth",
                "label": "干抹布",
                "kind": "cloth",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "wipe"
                ]
            },
            {
                "id": "cover",
                "label": "绝缘罩",
                "kind": "cover",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "cover"
                ]
            },
            {
                "id": "bell",
                "label": "门铃钮",
                "kind": "bell",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "接头未封好前，试铃也不能保证不再误响。"
            },
            {
                "id": "power",
                "label": "门铃电源",
                "kind": "switch",
                "x": 0.5,
                "y": 0.18,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "disconnect"
                ],
                "description": "先关掉低压门铃电源，再清理接头。"
            }
        ],
        "steps": [
            {
                "id": "observe",
                "source": "joint",
                "action": "tap",
                "requires": [],
                "feedback": "水珠跨接了两根裸线，误响来自水，不是有人藏着按铃。",
                "hints": [
                    "留意响铃前发生了什么。",
                    "同一滴水碰到了两个金属点。",
                    "点击潮湿接头，确认水滴与铃声的关系。"
                ]
            },
            {
                "id": "drain",
                "source": "drain",
                "action": "swipe",
                "requires": [
                    "observe"
                ],
                "feedback": "移开落叶，屋檐积水沿排水口流走，不再淋到接头。",
                "hints": [
                    "落叶堵住排水口。",
                    "把落叶往下拨走。",
                    "向下滑动排水口的落叶。"
                ],
                "direction": "down"
            },
            {
                "id": "disconnect",
                "source": "power",
                "action": "tap",
                "requires": [],
                "feedback": "低压电源断开，接头可以安全清理。",
                "hints": [
                    "擦接头前先断开电源。",
                    "上面有低压门铃的开关。",
                    "点击门铃电源。"
                ]
            },
            {
                "id": "wipe",
                "source": "cloth",
                "action": "drag",
                "target": "joint",
                "requires": [
                    "drain",
                    "disconnect"
                ],
                "feedback": "布吸走接头上的水珠，两根线之间恢复干燥。",
                "hints": [
                    "水源处理好了，残留水珠怎么办？",
                    "用干燥材料吸走水。",
                    "把干抹布拖到潮湿接头。"
                ]
            },
            {
                "id": "cover",
                "source": "cover",
                "action": "drag",
                "target": "dry",
                "requires": [
                    "wipe"
                ],
                "feedback": "绝缘罩扣紧，两根接线被分别保护起来。",
                "hints": [
                    "下一次下雨也要安全。",
                    "裸露金属需要保护罩。",
                    "把绝缘罩拖到干燥接头。"
                ]
            },
            {
                "id": "test",
                "source": "bell",
                "action": "hold",
                "requires": [
                    "cover"
                ],
                "feedback": "按下才响，松开即停，门铃恢复正常。",
                "hints": [
                    "检验铃声是否只跟随按钮。",
                    "按住后再松开观察。",
                    "按住门铃钮约一秒。"
                ],
                "durationMs": 900
            }
        ],
        "ending": "住户终于能安心午睡，门口挂上了感谢侦探社的小牌子。",
        "mechanism": "水路与低压电路分离",
        "legacyInspiration": "旧第13关：先解除现场风险，再修复",
        "timeLimitSeconds": 270,
        "sceneCaption": "雨停了，门铃还在自己响。"
    }),
    make({
        "id": 20,
        "title": "两把一样的钥匙",
        "category": "比对",
        "background": "office",
        "story": "两把钥匙正面完全一样。档案盒说明提醒：凹槽相符才能转动。",
        "goal": "用锁孔印记选对钥匙",
        "objects": [
            {
                "id": "box",
                "label": "检修盖",
                "kind": "box",
                "x": 0.5,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "检修说明建议先取印，再比较凹槽，避免暴力开锁。",
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "wax",
                "label": "软蜡片",
                "kind": "paper",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "imprint"
                ],
                "visibleWhen": []
            },
            {
                "id": "lock",
                "label": "档案锁",
                "kind": "lock",
                "x": 0.8,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "imprint",
                "label": "凹槽蜡印",
                "kind": "clue",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "imprint"
                ],
                "description": "蜡印显示：中段有两个相邻小缺口。",
                "hiddenWhen": []
            },
            {
                "id": "key-a",
                "label": "钥匙甲",
                "kind": "key",
                "x": 0.2,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "description": "甲钥匙中段只有一个宽缺口，与双缺口轮廓不符。",
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "key-b",
                "label": "钥匙乙",
                "kind": "key",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "description": "乙钥匙中段有两个相邻小缺口。",
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "dust-lock",
                "label": "锁孔浮尘",
                "kind": "dust",
                "x": 0.8,
                "y": 0.5,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [],
                "hiddenWhen": [
                    "dust-lock"
                ],
                "art": "dust",
                "description": "锁孔浮尘擦净，柔软蜡片不会粘到碎屑。"
            }
        ],
        "steps": [
            {
                "id": "dust-lock",
                "source": "dust-lock",
                "action": "scrub",
                "requires": [],
                "feedback": "锁孔浮尘擦净，柔软蜡片不会粘到碎屑。",
                "hints": [
                    "锁孔表面有灰，拓印会变形。",
                    "先擦净锁孔。",
                    "在锁孔浮尘上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "imprint",
                "source": "wax",
                "action": "drag",
                "target": "lock",
                "requires": [
                    "dust-lock"
                ],
                "feedback": "蜡片压出了中段双缺口的锁孔轮廓。",
                "hints": [
                    "锁孔能留下形状信息。",
                    "柔软蜡片可以记录入口凹槽。",
                    "把软蜡片拖到档案锁。"
                ]
            },
            {
                "id": "compare-a",
                "source": "key-a",
                "action": "drag",
                "requires": [
                    "imprint"
                ],
                "feedback": "钥匙甲是单宽槽，无法与双缺口蜡印贴合。",
                "hints": [
                    "把甲钥匙的齿形放到蜡印旁比一比。",
                    "重合的应该是两个相邻小缺口。",
                    "把钥匙甲拖到凹槽蜡印。"
                ],
                "target": "imprint"
            },
            {
                "id": "compare-b",
                "source": "key-b",
                "action": "drag",
                "requires": [
                    "imprint"
                ],
                "feedback": "钥匙乙的双缺口与蜡印完整吻合。",
                "hints": [
                    "再把乙钥匙的齿形与蜡印比较。",
                    "重合的应该是两个相邻小缺口。",
                    "把钥匙乙拖到凹槽蜡印。"
                ],
                "target": "imprint"
            },
            {
                "id": "unlock",
                "source": "key-b",
                "action": "drag",
                "target": "lock",
                "requires": [
                    "compare-a",
                    "compare-b"
                ],
                "feedback": "乙钥匙顺畅转动，档案盒打开了。",
                "hints": [
                    "把相符的轮廓用于锁孔。",
                    "选择双缺口而不是单宽槽。",
                    "把钥匙乙拖到档案锁。"
                ]
            }
        ],
        "ending": "盒子里是侦探社第一任社长留下的观察手册。",
        "mechanism": "锁孔取印与轮廓试配",
        "legacyInspiration": "旧第4/30关：先比对细节再正确解锁",
        "timeLimitSeconds": 250,
        "sceneCaption": "两把钥匙正面完全一样。"
    }),
    make({
        "id": 21,
        "title": "看不见的墨水",
        "category": "显迹",
        "background": "kitchen",
        "story": "空白便笺有淡淡柠檬味。纸边说明写着：温热可显字，禁止直接接触热源。",
        "goal": "安全显出便笺上的留言",
        "objects": [
            {
                "id": "paper",
                "label": "空白便笺",
                "kind": "paper",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "place"
                ],
                "description": "斜光下能看到写字压痕，纸不是没有内容。"
            },
            {
                "id": "lemon",
                "label": "柠檬说明",
                "kind": "lemon",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "柠檬汁写成的字会受温热显色；纸架的虚线是安全距离。"
            },
            {
                "id": "stand",
                "label": "安全纸架",
                "kind": "stand",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "place"
                ],
                "description": "纸架离灯罩一段距离，不会让纸接触灯泡。"
            },
            {
                "id": "placed",
                "label": "架上便笺",
                "kind": "paper",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "place"
                ],
                "hiddenWhen": [
                    "warm"
                ]
            },
            {
                "id": "lamp",
                "label": "暖灯旋钮",
                "kind": "lamp",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "description": "先把纸放上安全纸架，再开启温热档。"
            },
            {
                "id": "message",
                "label": "显字留言",
                "kind": "paper",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "warm"
                ]
            },
            {
                "id": "film",
                "label": "便笺保护膜",
                "kind": "paper",
                "x": 0.2,
                "y": 0.52,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "trace",
                    "read"
                ],
                "hiddenWhen": [
                    "film",
                    "place"
                ],
                "art": "paper-scrap",
                "description": "保护膜沿卷边揭开，纸张可以在安全距离下接受温热。"
            }
        ],
        "steps": [
            {
                "id": "trace",
                "source": "paper",
                "action": "tap",
                "requires": [],
                "feedback": "纸面有连贯压痕，确实有人在上面写过字。",
                "hints": [
                    "换个角度观察空白纸。",
                    "写过字的纸可能留下凹痕。",
                    "点击空白便笺观察压痕。"
                ]
            },
            {
                "id": "read",
                "source": "lemon",
                "action": "tap",
                "requires": [],
                "feedback": "说明指出温热显字，并标明纸架与灯的安全距离。",
                "hints": [
                    "气味也可能是线索。",
                    "看看柠檬旁的处理说明。",
                    "点击柠檬说明。"
                ]
            },
            {
                "id": "film",
                "source": "film",
                "action": "swipe",
                "requires": [
                    "trace",
                    "read"
                ],
                "feedback": "保护膜沿卷边揭开，纸张可以在安全距离下接受温热。",
                "hints": [
                    "薄膜会挡住纸面。",
                    "顺着透明卷边剥开。",
                    "向右滑动便笺保护膜。"
                ],
                "direction": "right"
            },
            {
                "id": "place",
                "source": "paper",
                "action": "drag",
                "target": "stand",
                "requires": [
                    "trace",
                    "read",
                    "film"
                ],
                "feedback": "便笺固定在虚线纸架上，与灯罩保持距离。",
                "hints": [
                    "先选择不会碰到热源的位置。",
                    "纸架已标出安全距离。",
                    "把空白便笺拖到安全纸架。"
                ]
            },
            {
                "id": "warm",
                "source": "lamp",
                "action": "hold",
                "requires": [
                    "place"
                ],
                "feedback": "温热档开启，纸上慢慢显出“画廊后门见”。",
                "hints": [
                    "温热显色需要片刻。",
                    "稳住暖灯的温热档。",
                    "按住暖灯旋钮约一秒。"
                ],
                "durationMs": 1200
            }
        ],
        "ending": "留言完整显现，纸张完好。墨团把这条安全规则记进了手册。",
        "mechanism": "温热显迹与保护纸张",
        "legacyInspiration": "旧第34关：处理覆盖层后显露原本隐藏的信息",
        "timeLimitSeconds": 250,
        "sceneCaption": "空白便笺有淡淡柠檬味。"
    }),
    make({
        "id": 22,
        "title": "错位的合影",
        "category": "推理",
        "background": "market",
        "story": "集市合影被人拼接过。原照片拍摄时，太阳在广场右侧。",
        "goal": "用光影与遮挡找出拼接位置",
        "objects": [
            {
                "id": "sun",
                "label": "广场日照",
                "kind": "sun",
                "x": 0.2,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "太阳在右，正常人物的影子应向左；不要用衣着判断。"
            },
            {
                "id": "photo",
                "label": "集市合影",
                "kind": "painting",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "mount"
                ]
            },
            {
                "id": "board",
                "label": "透光板",
                "kind": "frame",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "mount"
                ]
            },
            {
                "id": "shadow",
                "label": "逆向影子",
                "kind": "clue",
                "x": 0.45,
                "y": 0.36,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "mount"
                ],
                "description": "中间人像的影子反而朝右，正指向光源。"
            },
            {
                "id": "edge",
                "label": "遮挡断口",
                "kind": "clue",
                "x": 0.76,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "mount"
                ],
                "description": "同一条手臂在同伴前后穿插，遮挡关系不可能同时成立。"
            },
            {
                "id": "portrait",
                "label": "中间人像",
                "kind": "person",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "mount"
                ],
                "description": "请先确认影子和遮挡两条证据，再指出修改位置。"
            },
            {
                "id": "crease",
                "label": "合影卷曲边",
                "kind": "paper",
                "x": 0.5,
                "y": 0.76,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "mount",
                    "shadow",
                    "edge"
                ],
                "hiddenWhen": [
                    "crease"
                ],
                "art": "paper-scrap",
                "description": "压平卷曲边，轮廓不再因弯曲而错位。"
            }
        ],
        "steps": [
            {
                "id": "sun",
                "source": "sun",
                "action": "swipe",
                "requires": [],
                "feedback": "真实广场的影子向左，照片中的物体也应遵守同一方向。",
                "hints": [
                    "太阳的入射方向被帘子遮住。",
                    "把帘子沿上方收起。",
                    "向上滑动窗边的遮挡。"
                ],
                "direction": "up"
            },
            {
                "id": "mount",
                "source": "photo",
                "action": "drag",
                "target": "board",
                "requires": [
                    "sun"
                ],
                "feedback": "合影放上透光板，轮廓和接缝变得清晰。",
                "hints": [
                    "细小接缝需要透光观察。",
                    "透光板能看清前后轮廓。",
                    "把集市合影拖到透光板。"
                ]
            },
            {
                "id": "shadow",
                "source": "shadow",
                "action": "tap",
                "requires": [
                    "mount"
                ],
                "feedback": "中间人像的影子朝右，与右侧太阳矛盾。",
                "hints": [
                    "看看每个人脚边。",
                    "有一条影子朝向了光源。",
                    "点击逆向影子。"
                ]
            },
            {
                "id": "edge",
                "source": "edge",
                "action": "tap",
                "requires": [
                    "mount"
                ],
                "feedback": "手臂同时在同伴前后，暴露了拼接边缘。",
                "hints": [
                    "还可以用前后关系交叉验证。",
                    "同一只手臂不能穿过同伴。",
                    "点击遮挡断口。"
                ]
            },
            {
                "id": "crease",
                "source": "crease",
                "action": "hold",
                "requires": [
                    "shadow",
                    "edge"
                ],
                "feedback": "压平卷曲边，轮廓不再因弯曲而错位。",
                "hints": [
                    "照片卷曲也可能造成假错位。",
                    "先稳稳压平边角。",
                    "按住合影卷曲边约一秒。"
                ],
                "durationMs": 900
            },
            {
                "id": "choose",
                "source": "portrait",
                "action": "tap",
                "requires": [
                    "shadow",
                    "edge",
                    "crease"
                ],
                "feedback": "两处异常都落在中间人像，它就是后贴入的部分。",
                "hints": [
                    "让两条证据指向同一位置。",
                    "影子和接缝都属于中间人像。",
                    "点击中间人像确认拼接位置。"
                ]
            }
        ],
        "ending": "背面原片编号被找回，失物公告终于换上了真实照片。",
        "mechanism": "投影方向与错位证据",
        "legacyInspiration": "旧第8/23关：不同痕迹共同限定同一真实情境",
        "timeLimitSeconds": 270,
        "sceneCaption": "集市合影被人拼接过。"
    }),
    make({
        "id": 23,
        "title": "猫走过的书架",
        "category": "顺序",
        "background": "attic",
        "story": "书架后有猫叫，侧板没有把手。灰尘里似乎藏着一条爪印路线。",
        "goal": "沿爪印顺序打开检修侧板",
        "objects": [
            {
                "id": "cloth",
                "label": "软毛刷",
                "kind": "rod",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "dust"
                ],
                "decorative": true
            },
            {
                "id": "dust",
                "label": "蒙尘侧板",
                "kind": "box",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "dust"
                ]
            },
            {
                "id": "path",
                "label": "爪印路线",
                "kind": "paw",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "dust"
                ],
                "description": "从低到高：月亮书→猫爪书→星星书。"
            },
            {
                "id": "moon",
                "label": "月亮书",
                "kind": "book",
                "x": 0.2,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "paw",
                "label": "猫爪书",
                "kind": "book",
                "x": 0.5,
                "y": 0.38,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "star",
                "label": "星星书",
                "kind": "book",
                "x": 0.8,
                "y": 0.26,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "panel",
                "label": "检修门",
                "kind": "door",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "open"
                ],
                "description": "三本书依次拉对，侧板才会解锁。"
            },
            {
                "id": "cat",
                "label": "书后小猫",
                "kind": "cat",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "open"
                ]
            }
        ],
        "steps": [
            {
                "id": "dust",
                "source": "dust",
                "action": "scrub",
                "requires": [],
                "feedback": "灰尘被刷去，爪印由月亮书连到猫爪书，再到星星书。",
                "hints": [
                    "柜面只露出一小截爪印。",
                    "擦去浮灰能看到完整路线。",
                    "在积灰柜面上来回擦拭。"
                ],
                "minDistance": 0.55
            },
            {
                "id": "moon",
                "source": "moon",
                "action": "tap",
                "requires": [
                    "dust"
                ],
                "feedback": "最低的月亮书拉出，第一道卡扣松开。",
                "hints": [
                    "沿着爪印的起点开始。",
                    "路线从最低处的月亮符号起步。",
                    "点击月亮书。"
                ]
            },
            {
                "id": "paw",
                "source": "paw",
                "action": "tap",
                "requires": [
                    "moon"
                ],
                "feedback": "猫爪书拉出，第二道卡扣松开。",
                "hints": [
                    "沿路线继续向上。",
                    "月亮之后是猫爪。",
                    "点击猫爪书。"
                ]
            },
            {
                "id": "star",
                "source": "star",
                "action": "tap",
                "requires": [
                    "paw"
                ],
                "feedback": "星星书拉出，检修门轻轻弹开一条缝。",
                "hints": [
                    "路线的最高处在哪里？",
                    "最后一本带星星符号。",
                    "点击星星书。"
                ]
            },
            {
                "id": "open",
                "source": "panel",
                "action": "swipe",
                "requires": [
                    "star"
                ],
                "feedback": "推开侧板，小猫从书架后的安全通道走出来。",
                "hints": [
                    "路线末尾通到侧面板。",
                    "往左推开面板。",
                    "向左滑动暗格面板。"
                ],
                "direction": "left"
            },
            {
                "id": "calm",
                "source": "cat",
                "action": "hold",
                "requires": [
                    "open"
                ],
                "feedback": "躲在暗格的小猫放松下来，自己钻出了书架。",
                "hints": [
                    "猫已经找到，别急着拉它。",
                    "让它先熟悉你的气味。",
                    "按住露出的小猫约一秒。"
                ],
                "durationMs": 900
            }
        ],
        "ending": "小猫只是迷进了检修通道，管理员补上了清晰的出口标记。",
        "mechanism": "擦拭显迹与路线复现",
        "legacyInspiration": "旧第3关：特殊目标必须揭示后才能发现",
        "timeLimitSeconds": 270,
        "sceneCaption": "书架后有猫叫，侧板没有把手。"
    }),
    make({
        "id": 24,
        "title": "第二声钟响",
        "category": "诊断",
        "background": "workshop",
        "story": "钟敲一下，却会回响两声。旁边三片共振板中，有一片固定螺丝松了。",
        "goal": "确认松板并消除多余共振",
        "objects": [
            {
                "id": "hammer",
                "label": "测试锤",
                "kind": "rod",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "test"
                ]
            },
            {
                "id": "bell",
                "label": "主钟",
                "kind": "bell",
                "x": 0.5,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "plate-a",
                "label": "左共振板",
                "kind": "frame",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "description": "左板随钟短振后立即停止，固定正常。"
            },
            {
                "id": "plate-b",
                "label": "中共振板",
                "kind": "frame",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "description": "中板的波纹比其他板多持续一拍，螺丝旁还有磨痕。"
            },
            {
                "id": "plate-c",
                "label": "右共振板",
                "kind": "frame",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "description": "右板短振后即停，不是第二声来源。"
            },
            {
                "id": "clip",
                "label": "软夹",
                "kind": "clip",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "clamp"
                ]
            },
            {
                "id": "driver",
                "label": "螺丝刀",
                "kind": "rod",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "tighten"
                ]
            },
            {
                "id": "plate-dust",
                "label": "铜片油泥",
                "kind": "dust",
                "x": 0.5,
                "y": 0.52,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "test"
                ],
                "hiddenWhen": [
                    "plate-dust"
                ],
                "art": "dust",
                "description": "油泥被擦去，松动螺丝与铜片裂缝显露。"
            }
        ],
        "steps": [
            {
                "id": "test",
                "source": "hammer",
                "action": "drag",
                "target": "bell",
                "requires": [],
                "feedback": "主钟响后，中板仍有第二圈波纹；左右板已停止。",
                "hints": [
                    "先让异常可重复出现。",
                    "轻敲主钟，观察三块板的波纹。",
                    "把测试锤拖到主钟。"
                ]
            },
            {
                "id": "plate-dust",
                "source": "plate-dust",
                "action": "scrub",
                "requires": [
                    "test"
                ],
                "feedback": "油泥被擦去，松动螺丝与铜片裂缝显露。",
                "hints": [
                    "嗡声来自第二块铜片。",
                    "先擦净油泥，才能看见固定点。",
                    "在第二块铜片的油泥上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "inspect",
                "source": "plate-b",
                "action": "tap",
                "requires": [
                    "test",
                    "plate-dust"
                ],
                "feedback": "中板持续振动，固定螺丝周围留下新磨痕。",
                "hints": [
                    "哪一片在钟声结束后还在动？",
                    "中板的波纹多一拍。",
                    "点击中共振板检查固定处。"
                ]
            },
            {
                "id": "clamp",
                "source": "clip",
                "action": "drag",
                "target": "plate-b",
                "requires": [
                    "inspect"
                ],
                "feedback": "软夹暂时止住中板，多余的第二声也消失，判断得到了验证。",
                "hints": [
                    "先做可撤销的验证。",
                    "夹住疑似声源，看看多余共振是否停止。",
                    "把软夹拖到中共振板。"
                ]
            },
            {
                "id": "tighten",
                "source": "driver",
                "action": "drag",
                "target": "plate-b",
                "requires": [
                    "clamp"
                ],
                "feedback": "螺丝拧紧，中板恢复牢固固定。",
                "hints": [
                    "确认原因后再永久修复。",
                    "磨痕处的螺丝需要拧紧。",
                    "把螺丝刀拖到中共振板。"
                ]
            },
            {
                "id": "verify",
                "source": "bell",
                "action": "hold",
                "requires": [
                    "tighten"
                ],
                "feedback": "再次试钟，只剩清晰的一声，波纹也同时停止。",
                "hints": [
                    "短促敲击听不出残余共振。",
                    "让钟声维持一小会儿。",
                    "按住钟铃约一秒完成复测。"
                ],
                "durationMs": 1100
            }
        ],
        "ending": "即使关闭声音，也能靠波纹看懂修理过程。钟楼恢复清脆报时。",
        "mechanism": "声源隔振与螺丝紧固",
        "legacyInspiration": "旧第21关：同一工具用于不同对象，观察差异排除",
        "timeLimitSeconds": 270,
        "sceneCaption": "钟敲一下，却会回响两声。"
    }),
    make({
        "id": 25,
        "title": "借来的雨伞",
        "category": "推理",
        "background": "office",
        "story": "留言者借过一把伞：“我经过花店，没有走河边。”失物架上三把伞都没有姓名。",
        "goal": "依据附着物归还正确雨伞",
        "objects": [
            {
                "id": "note",
                "label": "路线留言",
                "kind": "paper",
                "x": 0.2,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "sample",
                "label": "花店样本",
                "kind": "plant",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "pollen",
                "label": "花粉雨伞",
                "kind": "umbrella",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "return"
                ],
                "description": "伞沿有金色颗粒；放大后才能确认是否为花粉。"
            },
            {
                "id": "mud",
                "label": "泥点雨伞",
                "kind": "umbrella",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "description": "这把伞全是工地泥点，和花店路线没有对应证据。"
            },
            {
                "id": "reed",
                "label": "河草雨伞",
                "kind": "umbrella",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "description": "这把伞挂着河草，与“没有走河边”矛盾。"
            },
            {
                "id": "glass",
                "label": "放大镜",
                "kind": "magnifier",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "compare"
                ]
            },
            {
                "id": "rack",
                "label": "归还架",
                "kind": "stand",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "petal",
                "label": "黏住样本的花瓣",
                "kind": "leaf",
                "x": 0.2,
                "y": 0.52,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "route",
                    "sample"
                ],
                "hiddenWhen": [
                    "petal",
                    "return"
                ],
                "art": "leaf",
                "description": "花瓣被轻轻拨开，下面的花粉样本完整露出。"
            }
        ],
        "steps": [
            {
                "id": "route",
                "source": "note",
                "action": "tap",
                "requires": [],
                "feedback": "路线只经过花店，没有经过河岸，可排除带河草的伞。",
                "hints": [
                    "想想失主经过了哪里。",
                    "留言中既有经过点，也有排除点。",
                    "点击路线留言。"
                ]
            },
            {
                "id": "sample",
                "source": "sample",
                "action": "hold",
                "requires": [],
                "feedback": "花店样本是带三条沟纹的金色花粉，泥粒没有这种纹理。",
                "hints": [
                    "对照样本的颗粒很细。",
                    "稳住样本，留意形状和颜色。",
                    "按住对照样本约一秒。"
                ],
                "durationMs": 900
            },
            {
                "id": "petal",
                "source": "petal",
                "action": "swipe",
                "requires": [
                    "route",
                    "sample"
                ],
                "feedback": "花瓣被轻轻拨开，下面的花粉样本完整露出。",
                "hints": [
                    "样本有一部分藏在花瓣下。",
                    "把花瓣向旁边拨。",
                    "向左滑动黏在雨伞上的花瓣。"
                ],
                "direction": "left"
            },
            {
                "id": "compare",
                "source": "glass",
                "action": "drag",
                "target": "pollen",
                "requires": [
                    "route",
                    "sample",
                    "petal"
                ],
                "feedback": "伞沿颗粒也有三条沟纹，与花店花粉一致。",
                "hints": [
                    "把路线线索和附着物对应起来。",
                    "放大伞沿，比较花粉纹理。",
                    "把放大镜拖到花粉雨伞。"
                ]
            },
            {
                "id": "return",
                "source": "pollen",
                "action": "drag",
                "target": "rack",
                "requires": [
                    "compare"
                ],
                "feedback": "带同种花粉的雨伞放上归还架，路线和物证完全吻合。",
                "hints": [
                    "已经确定哪把伞经过花店。",
                    "归还经过放大核对的那一把。",
                    "把花粉雨伞拖到归还架。"
                ]
            }
        ],
        "ending": "花店主人认出了自己的伞，送给侦探社一盆小小的薄荷。",
        "mechanism": "附着物分离与路线归属",
        "legacyInspiration": "旧第4/6关：物件留下的细节比自述可靠",
        "timeLimitSeconds": 250,
        "sceneCaption": "留言者借过一把伞：“我经过花店，没有走河边。"
    }),
    make({
        "id": 26,
        "title": "被风改写的路标",
        "category": "方向",
        "background": "alley",
        "story": "大风转歪了巷口路标。地图上车站在北面，墙边日晷标着东侧基准。",
        "goal": "校正路标方向并固定",
        "objects": [
            {
                "id": "map",
                "label": "街区地图",
                "kind": "map",
                "x": 0.2,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "sundial",
                "label": "东侧日晷",
                "kind": "sun",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "sign",
                "label": "旋转路标",
                "kind": "stand",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "description": "立柱有旧磨痕，应先确定北向，再转回原位置。"
            },
            {
                "id": "bolt",
                "label": "固定螺栓",
                "kind": "rod",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "fix"
                ]
            },
            {
                "id": "base",
                "label": "旧磨痕座",
                "kind": "box",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "north",
                "label": "北向车站",
                "kind": "door",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "description": "标志未固定前，不要给居民指路。"
            },
            {
                "id": "bolt-rust",
                "label": "螺栓表面锈泥",
                "kind": "dust",
                "x": 0.2,
                "y": 0.76,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "align"
                ],
                "hiddenWhen": [
                    "bolt-rust",
                    "fix"
                ],
                "art": "dust",
                "description": "螺栓擦净，可以准确嵌进底座。"
            }
        ],
        "steps": [
            {
                "id": "map",
                "source": "map",
                "action": "tap",
                "requires": [],
                "feedback": "地图说明车站在北面，原路标的北向不能凭当前位置判断。",
                "hints": [
                    "目的地在地图哪个方向？",
                    "先读地图的北向和车站位置。",
                    "点击街区地图。"
                ]
            },
            {
                "id": "east",
                "source": "sundial",
                "action": "tap",
                "requires": [],
                "feedback": "日晷东侧基准与巷道右方一致，北方因此在前方。",
                "hints": [
                    "需要场景中独立的方向依据。",
                    "日晷底座标出了固定东向。",
                    "点击东侧日晷。"
                ]
            },
            {
                "id": "align",
                "source": "sign",
                "action": "swipe",
                "requires": [
                    "map",
                    "east"
                ],
                "feedback": "路标转回北向，立柱划痕与旧基座磨痕连成一线。",
                "hints": [
                    "箭头朝向被风吹偏了。",
                    "以日晷和地图为参照向左转。",
                    "向左滑动歪掉的路标。"
                ],
                "direction": "left"
            },
            {
                "id": "bolt-rust",
                "source": "bolt-rust",
                "action": "scrub",
                "requires": [
                    "align"
                ],
                "feedback": "螺栓擦净，可以准确嵌进底座。",
                "hints": [
                    "螺栓被泥沙裹住，无法扣紧。",
                    "擦干净再固定。",
                    "在螺栓的锈泥上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "fix",
                "source": "bolt",
                "action": "drag",
                "target": "base",
                "requires": [
                    "align",
                    "bolt-rust"
                ],
                "feedback": "螺栓锁紧，路标不会再随风旋转。",
                "hints": [
                    "方向正确后还要防止再转。",
                    "把螺栓装回旧基座。",
                    "把固定螺栓拖到旧磨痕座。"
                ]
            },
            {
                "id": "guide",
                "source": "north",
                "action": "tap",
                "requires": [
                    "fix"
                ],
                "feedback": "沿北向车站标记指路，居民顺利找到了候车口。",
                "hints": [
                    "校正后的路标指向哪里？",
                    "地图中的车站位于北向。",
                    "点击北向车站。"
                ]
            }
        ],
        "ending": "墨团学会了先找方向基准，再相信一块会旋转的路牌。",
        "mechanism": "方向参照与固定路标",
        "legacyInspiration": "旧第11关：先摆对方向，再锁定场景构图",
        "timeLimitSeconds": 270,
        "sceneCaption": "大风转歪了巷口路标。"
    }),
    make({
        "id": 27,
        "title": "会撒谎的温度计",
        "category": "测量",
        "background": "sunroom",
        "story": "温室显示很热，植物却舒展正常。温度计正贴着一根暖水管。",
        "goal": "选择合适位置重新测温",
        "objects": [
            {
                "id": "plants",
                "label": "舒展叶片",
                "kind": "plant",
                "x": 0.2,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "阴影处和走道旁两株植物都没有热萎蔫，读数需要复核。"
            },
            {
                "id": "pipe",
                "label": "暖水管",
                "kind": "rod",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "水管附近有局部热纹，不代表整间温室的空气温度。"
            },
            {
                "id": "meter",
                "label": "温度计",
                "kind": "thermometer",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "move"
                ]
            },
            {
                "id": "shade",
                "label": "阴影挂钩",
                "kind": "hook",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "move"
                ],
                "description": "说明牌推荐远离热源、有空气流动的阴影处。"
            },
            {
                "id": "correct",
                "label": "稳定温度计",
                "kind": "thermometer",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "move"
                ]
            },
            {
                "id": "vent",
                "label": "通风旋钮",
                "kind": "switch",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            }
        ],
        "steps": [
            {
                "id": "plants",
                "source": "plants",
                "action": "tap",
                "requires": [],
                "feedback": "两株植物状态正常，与高温读数不一致，应检查测量条件。",
                "hints": [
                    "读数和周围现象一致吗？",
                    "比较两株植物的叶片状态。",
                    "点击舒展叶片。"
                ]
            },
            {
                "id": "heat",
                "source": "pipe",
                "action": "tap",
                "requires": [],
                "feedback": "暖水管只加热附近的小片区域，温度计测到了局部热源。",
                "hints": [
                    "测到的究竟是哪一处温度？",
                    "温度计旁边有会发热的东西。",
                    "点击暖水管。"
                ]
            },
            {
                "id": "move",
                "source": "meter",
                "action": "drag",
                "target": "shade",
                "requires": [
                    "plants",
                    "heat"
                ],
                "feedback": "温度计挂到通风阴影处，读数稳定在照护牌的正常区间。",
                "hints": [
                    "换到能代表室内空气的位置。",
                    "说明牌推荐远离热源的阴影挂钩。",
                    "把温度计拖到阴影挂钩。"
                ]
            },
            {
                "id": "equilibrate",
                "source": "correct",
                "action": "hold",
                "requires": [
                    "move"
                ],
                "feedback": "温度计在阴影里稳定下来，读数与植物状态一致。",
                "hints": [
                    "刚移走的温度计还带着余热。",
                    "让它在阴影里稳定一会儿。",
                    "按住移到阴影中的温度计约一秒。"
                ],
                "durationMs": 1200
            },
            {
                "id": "vent",
                "source": "vent",
                "action": "swipe",
                "requires": [
                    "move",
                    "equilibrate"
                ],
                "feedback": "按正常区间选择轻度通风，温室恢复合适的空气流动。",
                "hints": [
                    "确认读数后再调环境。",
                    "把天窗向上推开。",
                    "向上滑动通风开关。"
                ],
                "direction": "up"
            }
        ],
        "ending": "温度计没有坏，只是之前测错了地方。温室主人换好了挂钩。",
        "mechanism": "测量位置与稳定读数",
        "legacyInspiration": "旧第4关：检测工具的位置会影响判断",
        "timeLimitSeconds": 250,
        "sceneCaption": "温室显示很热，植物却舒展正常。"
    }),
    make({
        "id": 28,
        "title": "三封同一天的信",
        "category": "日期",
        "background": "market",
        "story": "三封信都说“今天到”。集市日历显示六月十二日，哪封是真正最新的急件？",
        "goal": "用绝对日期找出最新来信",
        "objects": [
            {
                "id": "calendar",
                "label": "活动日历",
                "kind": "paper",
                "x": 0.5,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "a",
                "label": "旧展会信",
                "kind": "letter",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "description": "信内写今天，邮戳六月十日；那天举办旧展会。"
            },
            {
                "id": "b",
                "label": "昨日来信",
                "kind": "letter",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "description": "信内写今天，邮戳六月十一日。"
            },
            {
                "id": "c",
                "label": "今日来信",
                "kind": "letter",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "sort"
                ],
                "description": "信内写今天，邮戳六月十二日，与集市日历一致。"
            },
            {
                "id": "urgent",
                "label": "急件格",
                "kind": "box",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "ribbon-c",
                "label": "丙信的封口绑带",
                "kind": "rope",
                "x": 0.8,
                "y": 0.52,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "calendar",
                    "a",
                    "b",
                    "c"
                ],
                "hiddenWhen": [
                    "ribbon-c",
                    "sort"
                ],
                "art": "rope",
                "description": "绑带打开，丙信的完整邮戳与寄件内容都可核对。"
            }
        ],
        "steps": [
            {
                "id": "calendar",
                "source": "calendar",
                "action": "tap",
                "requires": [],
                "feedback": "活动日历：今天是六月十二日，六月十日的展会已结束。",
                "hints": [
                    "先确定一个统一日期。",
                    "“今天”会随写信时间变化。",
                    "点击活动日历。"
                ]
            },
            {
                "id": "a",
                "source": "a",
                "action": "swipe",
                "requires": [],
                "feedback": "第一封邮戳是六月十日，里面的“今天”已经过去两天。",
                "hints": [
                    "甲信的邮戳被卷边遮住。",
                    "展开卷边看日期。",
                    "向上滑动甲信。"
                ],
                "direction": "up"
            },
            {
                "id": "b",
                "source": "b",
                "action": "hold",
                "requires": [],
                "feedback": "第二封邮戳是六月十一日，是昨天寄出的。",
                "hints": [
                    "乙信说的是相对日期。",
                    "停下来与日历对照。",
                    "按住乙信约一秒查看日期关系。"
                ],
                "durationMs": 900
            },
            {
                "id": "c",
                "source": "c",
                "action": "tap",
                "requires": [],
                "feedback": "第三封邮戳是六月十二日，与当前日历完全一致。",
                "hints": [
                    "哪封的邮戳与日历相同？",
                    "今天是六月十二日。",
                    "点击今日来信。"
                ]
            },
            {
                "id": "ribbon-c",
                "source": "ribbon-c",
                "action": "swipe",
                "requires": [
                    "calendar",
                    "a",
                    "b",
                    "c"
                ],
                "feedback": "绑带打开，丙信的完整邮戳与寄件内容都可核对。",
                "hints": [
                    "丙信的封口挡着一部分邮戳。",
                    "把绑带向下抽走。",
                    "向下滑动丙信的绑带。"
                ],
                "direction": "down"
            },
            {
                "id": "sort",
                "source": "c",
                "action": "drag",
                "target": "urgent",
                "requires": [
                    "calendar",
                    "a",
                    "b",
                    "c",
                    "ribbon-c"
                ],
                "feedback": "真正当天投递的委托进入急件格。",
                "hints": [
                    "比较三封信的绝对日期。",
                    "最新的是六月十二日这封。",
                    "把今日来信拖到急件格。"
                ]
            }
        ],
        "ending": "急件没有被旧信耽误，送信的猫咪终于可以去吃午饭了。",
        "mechanism": "绝对日期与相对描述",
        "legacyInspiration": "旧第8关：多份证据交叉核对",
        "timeLimitSeconds": 270,
        "sceneCaption": "三封信都说“今天到”。"
    }),
    make({
        "id": 29,
        "title": "只亮一半的星图",
        "category": "叠合",
        "background": "gallery",
        "story": "星图投影只剩半条线。两张透明片都带着一个相同圆点，另一张还倒着。",
        "goal": "叠合星片，读出完整坐标",
        "objects": [
            {
                "id": "guide",
                "label": "星图说明",
                "kind": "paper",
                "x": 0.5,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "说明要求先对齐两片圆点，再使星线连续；只转灯不能补齐缺片。",
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "film-a",
                "label": "左半星片",
                "kind": "frame",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "first"
                ],
                "visibleWhen": []
            },
            {
                "id": "film-b",
                "label": "右半星片",
                "kind": "frame",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "second"
                ],
                "visibleWhen": []
            },
            {
                "id": "projector",
                "label": "投影片槽",
                "kind": "box",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "knob",
                "label": "星片旋钮",
                "kind": "switch",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "code",
                "label": "完整星图",
                "kind": "star",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "rotate"
                ],
                "hiddenWhen": []
            },
            {
                "id": "blind",
                "label": "投影旁的遮光帘",
                "kind": "curtain",
                "x": 0.8,
                "y": 0.2,
                "w": 0.22,
                "h": 0.24,
                "hiddenWhen": [
                    "dark"
                ],
                "description": "房间太亮，叠片的暗星还看不见。",
                "visibleWhen": []
            }
        ],
        "steps": [
            {
                "id": "dark",
                "source": "blind",
                "action": "swipe",
                "requires": [],
                "feedback": "遮光帘拉下，弱星点也能显出来。",
                "hints": [
                    "投影对比太低。",
                    "让投影区暗一点。",
                    "向下滑动遮光帘。"
                ],
                "direction": "down"
            },
            {
                "id": "first",
                "source": "film-a",
                "action": "drag",
                "target": "projector",
                "requires": [
                    "dark"
                ],
                "feedback": "第一张星片固定在圆点基准，左半条星线亮起。",
                "hints": [
                    "先建立稳定的对齐基准。",
                    "左半片的圆点对应槽中标记。",
                    "把左半星片拖到投影片槽。"
                ]
            },
            {
                "id": "second",
                "source": "film-b",
                "action": "drag",
                "target": "projector",
                "requires": [
                    "first"
                ],
                "feedback": "第二片与圆点重合，但星线方向仍相反。",
                "hints": [
                    "补入另一半，再处理方向。",
                    "两片需要叠在同一基准点。",
                    "把右半星片拖到投影片槽。"
                ]
            },
            {
                "id": "rotate",
                "source": "knob",
                "action": "swipe",
                "requires": [
                    "second"
                ],
                "feedback": "第二片转到吸附角度，断开的星线完整连起。",
                "hints": [
                    "两层星点还没有重合。",
                    "把旋钮向右缓慢转动。",
                    "向右滑动投影旋钮。"
                ],
                "direction": "right"
            },
            {
                "id": "read",
                "source": "code",
                "action": "tap",
                "requires": [
                    "rotate"
                ],
                "feedback": "完整星图指向七号展柜，失踪的观测笔记找到了。",
                "hints": [
                    "完整图形指向什么位置？",
                    "星线终点标着展柜编号。",
                    "点击完整星图读取坐标。"
                ]
            }
        ],
        "ending": "两张不完整的图，终于给出了同一个完整答案。",
        "mechanism": "多层叠合与图案定位",
        "legacyInspiration": "旧第39关：利用明确规则组合多个局部条件",
        "timeLimitSeconds": 250,
        "sceneCaption": "星图投影只剩半条线。"
    }),
    make({
        "id": 30,
        "title": "迟到一分钟",
        "category": "校时",
        "background": "train",
        "story": "钟楼与车站相差一分钟。广播报时有独立时间标记，不能先假定哪只钟正确。",
        "goal": "找出偏快的钟并完成校准",
        "objects": [
            {
                "id": "log",
                "label": "发车记录",
                "kind": "paper",
                "x": 0.2,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "radio",
                "label": "独立报时",
                "kind": "radio",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "tower",
                "label": "钟楼钟面",
                "kind": "clock",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "description": "钟楼显示十二点零一分。"
            },
            {
                "id": "station",
                "label": "车站钟面",
                "kind": "clock",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "correct"
                ],
                "description": "车站显示十二点零二分，校准钮在钟面边缘。"
            },
            {
                "id": "corrected",
                "label": "校准钟面",
                "kind": "clock",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "correct"
                ]
            },
            {
                "id": "clock-fog",
                "label": "站钟上的雾气",
                "kind": "window",
                "x": 0.8,
                "y": 0.52,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "log",
                    "radio"
                ],
                "hiddenWhen": [
                    "clock-fog",
                    "correct"
                ],
                "art": "glass-fog",
                "description": "站钟玻璃擦清，指针与电台报时的差异露出来。"
            }
        ],
        "steps": [
            {
                "id": "log",
                "source": "log",
                "action": "tap",
                "requires": [],
                "feedback": "记录写明末班车应在广播十二点零一分时发出。",
                "hints": [
                    "先核对游戏中的固定记录。",
                    "发车时刻不取决于哪只钟更大。",
                    "点击发车记录。"
                ]
            },
            {
                "id": "radio",
                "source": "radio",
                "action": "tap",
                "requires": [],
                "feedback": "广播字幕清楚报出十二点零一分，来源独立于这两只钟。",
                "hints": [
                    "需要第三个时间依据。",
                    "广播带有独立报时字幕。",
                    "点击独立报时。"
                ]
            },
            {
                "id": "tower",
                "source": "tower",
                "action": "tap",
                "requires": [
                    "log",
                    "radio"
                ],
                "feedback": "钟楼显示十二点零一分，与独立报时一致。",
                "hints": [
                    "把第一只钟与独立报时比较。",
                    "钟楼读数是十二点零一分。",
                    "点击钟楼钟面。"
                ]
            },
            {
                "id": "clock-fog",
                "source": "clock-fog",
                "action": "scrub",
                "requires": [
                    "log",
                    "radio"
                ],
                "feedback": "站钟玻璃擦清，指针与电台报时的差异露出来。",
                "hints": [
                    "需要先看清站钟。",
                    "擦掉表面的雾气。",
                    "在站钟玻璃上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "station",
                "source": "station",
                "action": "tap",
                "requires": [
                    "log",
                    "radio",
                    "clock-fog"
                ],
                "feedback": "车站显示十二点零二分，确实比广播快一分钟。",
                "hints": [
                    "再核对第二只钟。",
                    "车站比广播多走了一分钟。",
                    "点击车站钟面比较时间。"
                ]
            },
            {
                "id": "correct",
                "source": "station",
                "action": "swipe",
                "requires": [
                    "tower",
                    "station"
                ],
                "feedback": "按校准钮，车站钟退回一分钟，与独立报时对齐。",
                "hints": [
                    "站钟慢了一分钟。",
                    "把指针向前调一小格。",
                    "向右滑动站钟指针。"
                ],
                "direction": "right"
            },
            {
                "id": "verify",
                "source": "radio",
                "action": "hold",
                "requires": [
                    "correct"
                ],
                "feedback": "复播报时，两钟与广播字幕现在一致。",
                "hints": [
                    "最后再听一次独立报时。",
                    "留意整点前的稳定信号。",
                    "按住收音机约一秒。"
                ],
                "durationMs": 1000
            }
        ],
        "ending": "司机没有迟到，是车站的钟多走了一分钟。",
        "mechanism": "独立校时与错误钟修正",
        "legacyInspiration": "旧第8/18关：不依赖单一来源，先校正再行动",
        "timeLimitSeconds": 290,
        "sceneCaption": "钟楼与车站相差一分钟。"
    }),
    make({
        "id": 31,
        "title": "窗上的第二只猫",
        "category": "反射",
        "background": "office",
        "story": "窗里好像出现了第二只墨团，但窗外也传来猫叫。先分清反射和真正的访客。",
        "goal": "分辨倒影并迎接阳台上的猫",
        "objects": [
            {
                "id": "lamp",
                "label": "可移台灯",
                "kind": "lamp",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "move"
                ]
            },
            {
                "id": "stand",
                "label": "窗边灯位",
                "kind": "stand",
                "x": 0.5,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "reflection",
                "label": "同步倒影",
                "kind": "cat",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "shade"
                ],
                "description": "它的动作和屋里的墨团完全同步，像是窗面反光。"
            },
            {
                "id": "curtain",
                "label": "半边窗帘",
                "kind": "curtain",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "shade"
                ]
            },
            {
                "id": "visitor",
                "label": "阳台真猫",
                "kind": "cat",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "shade"
                ],
                "description": "它不会跟着墨团同步动作，叫声也来自它的位置。"
            },
            {
                "id": "door",
                "label": "安全小门",
                "kind": "door",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "description": "这扇小门通往有护栏的安全阳台。确认访客后再开门。"
            },
            {
                "id": "glass-haze",
                "label": "窗上的薄雾",
                "kind": "window",
                "x": 0.8,
                "y": 0.52,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "shade"
                ],
                "hiddenWhen": [
                    "glass-haze"
                ],
                "art": "glass-fog",
                "description": "薄雾擦净，倒影消失而窗外真实小猫仍在那里。"
            }
        ],
        "steps": [
            {
                "id": "move",
                "source": "lamp",
                "action": "drag",
                "target": "stand",
                "requires": [],
                "feedback": "台灯移近窗边，第二只墨团也随光改变明暗，说明它是反射。",
                "hints": [
                    "两只墨团为什么完全同步？",
                    "改变室内照明，看看窗上影像是否跟着变。",
                    "把可移台灯拖到窗边灯位。"
                ]
            },
            {
                "id": "shade",
                "source": "curtain",
                "action": "swipe",
                "requires": [
                    "move"
                ],
                "feedback": "半帘遮住反光，倒影消失，阳台上还有另一只真正的猫。",
                "hints": [
                    "遮住室内反光看看。",
                    "把窗帘横向拉起。",
                    "向左滑动窗帘。"
                ],
                "direction": "left"
            },
            {
                "id": "glass-haze",
                "source": "glass-haze",
                "action": "scrub",
                "requires": [
                    "shade"
                ],
                "feedback": "薄雾擦净，倒影消失而窗外真实小猫仍在那里。",
                "hints": [
                    "要分清玻璃里外。",
                    "擦净薄雾后比较位置。",
                    "在窗边薄雾上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "confirm",
                "source": "visitor",
                "action": "tap",
                "requires": [
                    "shade",
                    "glass-haze"
                ],
                "feedback": "阳台访客转头回应，动作独立，猫叫声确实来自它。",
                "hints": [
                    "确认留下来的是真访客。",
                    "真猫不会跟着墨团同步动作。",
                    "点击阳台真猫观察回应。"
                ]
            },
            {
                "id": "open",
                "source": "door",
                "action": "swipe",
                "requires": [
                    "confirm"
                ],
                "feedback": "安全小门打开，访客沿有护栏的小通道走进侦探社。",
                "hints": [
                    "确认真实访客后才开门。",
                    "沿门把手方向拉开。",
                    "向右滑动房门。"
                ],
                "direction": "right"
            }
        ],
        "ending": "原来既有倒影，也有真猫。观察不同来源，才能解释所有现象。",
        "mechanism": "光源对照与真实访客",
        "legacyInspiration": "旧第16/21关：查明真实身份后再开门",
        "timeLimitSeconds": 250,
        "sceneCaption": "窗里好像出现了第二只墨团，但窗外也传来猫叫。"
    }),
    make({
        "id": 32,
        "title": "没有锁的箱子",
        "category": "气压",
        "background": "workshop",
        "story": "包裹箱没有锁孔，箱盖却吸得很紧。运输标签上画着一个通气小孔。",
        "goal": "安全解除箱内外压差",
        "objects": [
            {
                "id": "tag",
                "label": "运输标签",
                "kind": "paper",
                "x": 0.2,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "图标说明：开启前先保持通气孔畅通。"
            },
            {
                "id": "sticker",
                "label": "堵孔贴纸",
                "kind": "paper",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "peel"
                ],
                "description": "贴纸边角翘起，正好盖住标签所示通气孔。"
            },
            {
                "id": "vent",
                "label": "通气小孔",
                "kind": "gap",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "peel"
                ],
                "description": "揭纸后还要拨开运输塞，空气才能进入。"
            },
            {
                "id": "lid",
                "label": "密封箱盖",
                "kind": "box",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "open"
                ],
                "description": "没有锁扣；强拉只会让密封圈更紧，先检查气孔。"
            },
            {
                "id": "toy",
                "label": "箱内玩具",
                "kind": "cat",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "open"
                ],
                "hiddenWhen": [
                    "return-toy"
                ]
            },
            {
                "id": "kitten",
                "label": "等待玩具的小猫",
                "kind": "cat",
                "x": 0.2,
                "y": 0.78,
                "w": 0.22,
                "h": 0.25,
                "visibleWhen": [
                    "open"
                ],
                "art": "cat-gray"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "tag",
                "action": "tap",
                "requires": [],
                "feedback": "标签提示先通气；打不开并不一定是被锁住。",
                "hints": [
                    "箱子没有锁孔，阻力从哪里来？",
                    "运输图标可能说明开启方式。",
                    "点击运输标签。"
                ]
            },
            {
                "id": "peel",
                "source": "sticker",
                "action": "swipe",
                "requires": [
                    "read"
                ],
                "feedback": "贴纸揭开，露出被遮住的通气孔和运输塞。",
                "hints": [
                    "贴纸盖住了排气口。",
                    "沿卷边轻轻揭开。",
                    "向右滑动密封贴纸。"
                ],
                "direction": "right"
            },
            {
                "id": "vent",
                "source": "vent",
                "action": "hold",
                "requires": [
                    "peel"
                ],
                "feedback": "拨开运输塞，气流图标闪过，箱内外气压恢复一致。",
                "hints": [
                    "气压平衡需要片刻。",
                    "按住排气位置让空气进入。",
                    "按住排气口约一秒。"
                ],
                "durationMs": 1100
            },
            {
                "id": "open",
                "source": "lid",
                "action": "tap",
                "requires": [
                    "vent"
                ],
                "feedback": "压力平衡后，箱盖轻轻一抬就打开了。",
                "hints": [
                    "阻力原因已经消除。",
                    "现在不需要钥匙或撬杆。",
                    "点击密封箱盖。"
                ]
            },
            {
                "id": "return-toy",
                "source": "toy",
                "action": "drag",
                "target": "kitten",
                "requires": [
                    "open"
                ],
                "feedback": "玩具取出来交给小猫，密封箱的委托完成。",
                "hints": [
                    "箱子打开后，东西要交还给主人。",
                    "小猫正等着它的玩具。",
                    "把箱里的玩具拖给小猫。"
                ]
            }
        ],
        "ending": "玩具猫完好无损，墨团确认这次获救的只是一只布偶。",
        "mechanism": "封膜与压力平衡",
        "legacyInspiration": "旧第30关：不同锁定原因要用不同方法解除",
        "timeLimitSeconds": 250,
        "sceneCaption": "包裹箱没有锁孔，箱盖却吸得很紧。"
    }),
    make({
        "id": 33,
        "title": "夜里开的花",
        "category": "规则反转",
        "background": "sunroom",
        "story": "夜间展览的花不开。照护卡写着：湿润土壤、避免直射光，步道灯可以保留。",
        "goal": "为夜开花创造适合的环境",
        "objects": [
            {
                "id": "care",
                "label": "夜花照护卡",
                "kind": "paper",
                "x": 0.2,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "soil",
                "label": "干燥花土",
                "kind": "plant",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "water",
                "label": "小水壶",
                "kind": "water",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "water"
                ]
            },
            {
                "id": "shade",
                "label": "遮光板",
                "kind": "cover",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "dark"
                ]
            },
            {
                "id": "lamp",
                "label": "直射展灯",
                "kind": "lamp",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "dark"
                ]
            },
            {
                "id": "flower",
                "label": "闭合夜花",
                "kind": "flower",
                "x": 0.5,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "bloom"
                ]
            },
            {
                "id": "bloom",
                "label": "展开夜花",
                "kind": "flower",
                "x": 0.5,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "bloom"
                ]
            },
            {
                "id": "dry-leaf",
                "label": "花盆里的枯叶",
                "kind": "leaf",
                "x": 0.5,
                "y": 0.52,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "care",
                    "soil"
                ],
                "hiddenWhen": [
                    "dry-leaf"
                ],
                "art": "leaf",
                "description": "枯叶被拨走，水能进入土壤而不是积在表面。"
            }
        ],
        "steps": [
            {
                "id": "care",
                "source": "care",
                "action": "tap",
                "requires": [],
                "feedback": "这株是夜开花，需要黑暗与湿润，不能照搬白天花钟的日照办法。",
                "hints": [
                    "先了解这株花自己的规则。",
                    "照护卡写的是夜间开花。",
                    "点击夜花照护卡。"
                ]
            },
            {
                "id": "soil",
                "source": "soil",
                "action": "tap",
                "requires": [],
                "feedback": "土表干燥，花的水分条件还没有满足。",
                "hints": [
                    "光线以外，还需要什么？",
                    "检查花土的干湿。",
                    "点击干燥花土。"
                ]
            },
            {
                "id": "dry-leaf",
                "source": "dry-leaf",
                "action": "swipe",
                "requires": [
                    "care",
                    "soil"
                ],
                "feedback": "枯叶被拨走，水能进入土壤而不是积在表面。",
                "hints": [
                    "土面还盖着厚枯叶。",
                    "先把枯叶移到一旁。",
                    "向左滑动花盆里的枯叶。"
                ],
                "direction": "left"
            },
            {
                "id": "water",
                "source": "water",
                "action": "drag",
                "target": "soil",
                "requires": [
                    "care",
                    "soil",
                    "dry-leaf"
                ],
                "feedback": "适量水分渗入土壤，供水自动停止。",
                "hints": [
                    "把缺少的条件补上。",
                    "只浇到湿润，不需要反复倒水。",
                    "把小水壶拖到干燥花土。"
                ]
            },
            {
                "id": "dark",
                "source": "shade",
                "action": "drag",
                "target": "lamp",
                "requires": [
                    "care"
                ],
                "feedback": "遮光板挡住直射灯，步道照明仍然保留。",
                "hints": [
                    "夜开花需要什么光照条件？",
                    "遮住直射花朵的展灯即可。",
                    "把遮光板拖到直射展灯。"
                ]
            },
            {
                "id": "bloom",
                "source": "flower",
                "action": "hold",
                "requires": [
                    "water",
                    "dark"
                ],
                "feedback": "湿润与遮光条件齐备，花瓣展开，展览印章出现在花心。",
                "hints": [
                    "这种花需要安静阴暗的环境。",
                    "不要再打开灯，停留观察一会儿。",
                    "按住花苞约一秒。"
                ],
                "durationMs": 1200
            }
        ],
        "ending": "墨团明白：好方法也需要适用条件，给所有植物同样的光并不正确。",
        "mechanism": "条件反转与植物照护",
        "legacyInspiration": "旧第42关：环境条件必须符合角色真正需要",
        "timeLimitSeconds": 270,
        "sceneCaption": "夜间展览的花不开。"
    }),
    make({
        "id": 34,
        "title": "谁先到集市",
        "category": "偏序",
        "background": "market",
        "story": "三位居民记不清排队先后。烤炉、钟和送货记录共同留下了顺序。",
        "goal": "按事件关系恢复居民队列",
        "objects": [
            {
                "id": "record",
                "label": "事件记录",
                "kind": "paper",
                "x": 0.5,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "烤炉出炉→钟响→送货；阿狸出炉前到，兔子钟响后且送货前到，小狗送货后到。"
            },
            {
                "id": "fox",
                "label": "阿狸卡",
                "kind": "person",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "first"
                ]
            },
            {
                "id": "rabbit",
                "label": "兔子卡",
                "kind": "person",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "second"
                ]
            },
            {
                "id": "dog",
                "label": "小狗卡",
                "kind": "person",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "third"
                ]
            },
            {
                "id": "slot1",
                "label": "第一位置",
                "kind": "box",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "slot2",
                "label": "第二位置",
                "kind": "box",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "slot3",
                "label": "第三位置",
                "kind": "box",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "submit",
                "label": "确认铃",
                "kind": "bell",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "bell",
                "label": "开市小铃",
                "kind": "bell",
                "x": 0.5,
                "y": 0.87,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "submit"
                ]
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "record",
                "action": "swipe",
                "requires": [],
                "feedback": "事件顺序为出炉→钟响→送货。阿狸在最早事件前，兔子夹在后两事件之间，小狗最后。",
                "hints": [
                    "记录折着，只能看到一半。",
                    "把折页向下展开。",
                    "向下滑动到场记录。"
                ],
                "direction": "down"
            },
            {
                "id": "first",
                "source": "fox",
                "action": "drag",
                "target": "slot1",
                "requires": [
                    "read"
                ],
                "feedback": "阿狸在出炉前到达，比另外两位都早。",
                "hints": [
                    "谁出现在最早的公共事件之前？",
                    "阿狸在出炉之前就到了。",
                    "把阿狸卡拖到第一位置。"
                ]
            },
            {
                "id": "second",
                "source": "rabbit",
                "action": "drag",
                "target": "slot2",
                "requires": [
                    "read"
                ],
                "feedback": "兔子在钟响后、送货前到达，位于中间。",
                "hints": [
                    "哪位的到达夹在两个事件之间？",
                    "兔子在钟响之后、送货之前。",
                    "把兔子卡拖到第二位置。"
                ]
            },
            {
                "id": "third",
                "source": "dog",
                "action": "drag",
                "target": "slot3",
                "requires": [
                    "read"
                ],
                "feedback": "小狗在送货完成后才到，是最后一位。",
                "hints": [
                    "谁在最后的公共事件之后才到？",
                    "小狗送货后到达。",
                    "把小狗卡拖到第三位置。"
                ]
            },
            {
                "id": "submit",
                "source": "submit",
                "action": "tap",
                "requires": [
                    "first",
                    "second",
                    "third"
                ],
                "feedback": "完整队列与三条事件关系全部一致。",
                "hints": [
                    "检查三位都符合各自证词。",
                    "阿狸、兔子、小狗依次排好。",
                    "点击确认铃提交队列。"
                ]
            },
            {
                "id": "open-market",
                "source": "bell",
                "action": "hold",
                "requires": [
                    "submit"
                ],
                "feedback": "顺序核实后，小铃响起，三位邻居依次进入集市。",
                "hints": [
                    "排好队后才可以开市。",
                    "用铃声通知大家按顺序进入。",
                    "按住开市小铃约一秒。"
                ],
                "durationMs": 900
            }
        ],
        "ending": "居民们接受了有依据的队列，热面包也刚好出炉。",
        "mechanism": "偏序线索与三人排队",
        "legacyInspiration": "旧第11/28关：按角色关系调整站位",
        "timeLimitSeconds": 270,
        "sceneCaption": "三位居民记不清排队先后。"
    }),
    make({
        "id": 35,
        "title": "画里的风向",
        "category": "一致性",
        "background": "gallery",
        "story": "三块画布装错了位置。风向标明确向东，旗帜、烟和树叶必须表现同一阵风。",
        "goal": "恢复风向一致的画面",
        "objects": [
            {
                "id": "wind",
                "label": "向东风标",
                "kind": "stand",
                "x": 0.5,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "固定风向标指向东；风吹动的旗、烟、叶也都应向东。"
            },
            {
                "id": "flag",
                "label": "旗帜画片",
                "kind": "painting",
                "x": 0.2,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "flag"
                ]
            },
            {
                "id": "smoke",
                "label": "烟雾画片",
                "kind": "painting",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "smoke"
                ]
            },
            {
                "id": "leaf",
                "label": "树叶画片",
                "kind": "leaf",
                "x": 0.8,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "leaf"
                ]
            },
            {
                "id": "slot-a",
                "label": "旗帜东向槽",
                "kind": "frame",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "slot-b",
                "label": "烟雾东向槽",
                "kind": "frame",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "slot-c",
                "label": "树叶东向槽",
                "kind": "frame",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "lock",
                "label": "画框卡扣",
                "kind": "lock",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "vane-cover",
                "label": "风向标保护罩",
                "kind": "cover",
                "x": 0.5,
                "y": 0.28,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [],
                "hiddenWhen": [
                    "vane-cover"
                ],
                "art": "cover",
                "description": "保护罩移开，风向标给出了真实参照方向。"
            }
        ],
        "steps": [
            {
                "id": "vane-cover",
                "source": "vane-cover",
                "action": "swipe",
                "requires": [],
                "feedback": "保护罩移开，风向标给出了真实参照方向。",
                "hints": [
                    "参照物也被遮住了。",
                    "先取下风向标的保护罩。",
                    "向上滑动风向标保护罩。"
                ],
                "direction": "up"
            },
            {
                "id": "read",
                "source": "wind",
                "action": "tap",
                "requires": [
                    "vane-cover"
                ],
                "feedback": "风向标是固定基准，三块画片都应与向东的风一致。",
                "hints": [
                    "看不见的风会影响哪些东西？",
                    "固定风向标可以作为基准。",
                    "点击向东风标。"
                ]
            },
            {
                "id": "flag",
                "source": "flag",
                "action": "drag",
                "target": "slot-a",
                "requires": [
                    "read"
                ],
                "feedback": "旗帜片转到向东槽，飘动方向与风标一致。",
                "hints": [
                    "先核对旗帜被吹向哪里。",
                    "旗帜应向东展开。",
                    "把旗帜画片拖到旗帜东向槽。"
                ]
            },
            {
                "id": "smoke",
                "source": "smoke",
                "action": "drag",
                "target": "slot-b",
                "requires": [
                    "read"
                ],
                "feedback": "烟雾片转到向东槽，烟线接上了地平线。",
                "hints": [
                    "烟也受同一阵风影响。",
                    "让烟雾和风向标同向。",
                    "把烟雾画片拖到烟雾东向槽。"
                ]
            },
            {
                "id": "leaf",
                "source": "leaf",
                "action": "drag",
                "target": "slot-c",
                "requires": [
                    "read"
                ],
                "feedback": "树叶片转到向东槽，叶脉与枝条轮廓连贯。",
                "hints": [
                    "还有哪一片没有与风一致？",
                    "树叶也应该向东偏。",
                    "把树叶画片拖到树叶东向槽。"
                ]
            },
            {
                "id": "lock",
                "source": "lock",
                "action": "hold",
                "requires": [
                    "flag",
                    "smoke",
                    "leaf"
                ],
                "feedback": "地平线与风向全部连续，卡扣锁住修复好的画作。",
                "hints": [
                    "三幅画中的风应当朝同一方向。",
                    "稳住拼好的画框扣紧卡扣。",
                    "按住画框锁扣约一秒。"
                ],
                "durationMs": 900
            }
        ],
        "ending": "修复师留下自己的签名：侦探找回了画里看不见的风。",
        "mechanism": "风向一致与画面重组",
        "legacyInspiration": "旧第11关：修正局部姿态，让整体关系成立",
        "timeLimitSeconds": 270,
        "sceneCaption": "三块画布装错了位置。"
    }),
    make({
        "id": 36,
        "title": "小镇的第一封回信",
        "category": "综合",
        "background": "train",
        "story": "夜邮车即将到站。居民的回信需要先核对来源，再用邮灯通知司机。",
        "goal": "核对邮件并完成安全交接",
        "objects": [
            {
                "id": "route",
                "label": "邮路核对卡",
                "kind": "paper",
                "x": 0.2,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "圆邮戳对应北线邮车；邮灯先接电、镜面朝站台，再发一次到站通知。"
            },
            {
                "id": "bag",
                "label": "圆戳邮件袋",
                "kind": "box",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "sort"
                ]
            },
            {
                "id": "tray",
                "label": "北线分拣格",
                "kind": "box",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "sort"
                ]
            },
            {
                "id": "ready",
                "label": "已核对邮袋",
                "kind": "box",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "sort"
                ],
                "hiddenWhen": [
                    "deliver"
                ]
            },
            {
                "id": "battery",
                "label": "邮灯电池",
                "kind": "battery",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "power"
                ]
            },
            {
                "id": "socket",
                "label": "邮灯电源口",
                "kind": "socket",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "mirror",
                "label": "邮灯反光镜",
                "kind": "mirror",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "mirror"
                ]
            },
            {
                "id": "stand",
                "label": "站台镜架",
                "kind": "stand",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "signal",
                "label": "到站信号钮",
                "kind": "button",
                "x": 0.5,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "cart",
                "label": "北线邮车",
                "kind": "box",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "lamp-dust",
                "label": "邮灯玻璃积灰",
                "kind": "window",
                "x": 0.8,
                "y": 0.52,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "power"
                ],
                "hiddenWhen": [
                    "lamp-dust"
                ],
                "art": "glass-fog",
                "description": "邮灯玻璃擦亮，反射出去的信号不再散成一团。"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "route",
                "action": "tap",
                "requires": [],
                "feedback": "圆邮戳属于北线；先核对邮袋，再让邮灯照向北线站台。",
                "hints": [
                    "交接对象和通知方式都要有依据。",
                    "邮路卡说明了圆戳对应的路线。",
                    "点击邮路核对卡。"
                ]
            },
            {
                "id": "sort",
                "source": "bag",
                "action": "drag",
                "target": "tray",
                "requires": [
                    "read"
                ],
                "feedback": "圆邮戳与北线分拣格一致，邮件袋已核对。",
                "hints": [
                    "先确认邮件应该交给哪条线路。",
                    "圆邮戳对应北线。",
                    "把圆戳邮件袋拖到北线分拣格。"
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
                "feedback": "邮灯接上电源，亮起待命指示。",
                "hints": [
                    "通知司机需要先恢复供电。",
                    "邮灯电池和电源口接头相符。",
                    "把邮灯电池拖到邮灯电源口。"
                ]
            },
            {
                "id": "lamp-dust",
                "source": "lamp-dust",
                "action": "scrub",
                "requires": [
                    "power"
                ],
                "feedback": "邮灯玻璃擦亮，反射出去的信号不再散成一团。",
                "hints": [
                    "灯亮了却不够清楚。",
                    "先擦净邮灯外罩。",
                    "在邮灯玻璃积灰上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "mirror",
                "source": "mirror",
                "action": "drag",
                "target": "stand",
                "requires": [
                    "power",
                    "lamp-dust"
                ],
                "feedback": "反光镜对准站台，灯光可以被北线司机看到。",
                "hints": [
                    "亮灯后还要检查光照方向。",
                    "镜架正对北线站台。",
                    "把邮灯反光镜拖到站台镜架。"
                ]
            },
            {
                "id": "signal",
                "source": "signal",
                "action": "hold",
                "requires": [
                    "mirror"
                ],
                "feedback": "到站通知发出，北线邮车亮灯回应。",
                "hints": [
                    "邮车需要一个持续的安全信号。",
                    "按住信号键，不要只轻点。",
                    "按住邮灯信号键约一秒。"
                ],
                "durationMs": 1100
            },
            {
                "id": "deliver",
                "source": "ready",
                "action": "drag",
                "target": "cart",
                "requires": [
                    "sort",
                    "signal"
                ],
                "feedback": "邮戳和车辆标记一致，已核对的邮袋安全交接。",
                "hints": [
                    "只有收到回应后才能交袋。",
                    "确认北线标记与圆邮戳一致。",
                    "把已核对邮袋拖到北线邮车。"
                ]
            }
        ],
        "ending": "小镇的第一封回信启程，感谢卡上画满了大大小小的猫爪。",
        "mechanism": "邮件核验与夜间接驳",
        "legacyInspiration": "旧第53/54关：来源核对与安全送达分为两个阶段",
        "timeLimitSeconds": 290,
        "sceneCaption": "夜邮车即将到站。"
    }),
    make({
        "id": 37,
        "title": "盐罐里的留言",
        "category": "溶解",
        "background": "kitchen",
        "story": "防水留言胶囊被埋在结块盐罐里。说明写着：“盐可溶于水，胶囊不会。”",
        "goal": "分离盐粒并取回防水胶囊",
        "objects": [
            {
                "id": "guide",
                "label": "分离说明",
                "kind": "paper",
                "x": 0.2,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "盐会溶于清水，防水胶囊不会；先溶解再用细网勺捞取，不必敲碎罐子。",
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "jar",
                "label": "结块盐罐",
                "kind": "box",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "filter"
                ],
                "visibleWhen": []
            },
            {
                "id": "water",
                "label": "清水瓶",
                "kind": "water",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "dissolve"
                ],
                "visibleWhen": []
            },
            {
                "id": "net",
                "label": "细网勺",
                "kind": "net",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "filter"
                ],
                "visibleWhen": []
            },
            {
                "id": "capsule",
                "label": "防水胶囊",
                "kind": "box",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "filter"
                ],
                "hiddenWhen": [
                    "open"
                ]
            },
            {
                "id": "key",
                "label": "胶囊钥匙",
                "kind": "key",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "open"
                ],
                "hiddenWhen": [
                    "unlock"
                ]
            },
            {
                "id": "lock",
                "label": "留言盒锁",
                "kind": "lock",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [],
                "hiddenWhen": []
            }
        ],
        "steps": [
            {
                "id": "dissolve",
                "source": "water",
                "action": "drag",
                "target": "jar",
                "requires": [],
                "feedback": "清水使盐块逐渐溶开，完整胶囊从盐中露出。",
                "hints": [
                    "让包住胶囊的材料自行分开。",
                    "清水能溶解盐。",
                    "把清水瓶拖到结块盐罐。"
                ]
            },
            {
                "id": "stir",
                "source": "jar",
                "action": "hold",
                "requires": [
                    "dissolve"
                ],
                "feedback": "轻轻稳住盐罐，盐粒逐渐化开，胶囊留在清水里。",
                "hints": [
                    "刚加水还看不清胶囊。",
                    "让盐充分化开。",
                    "按住盐罐约一秒。"
                ],
                "durationMs": 1100
            },
            {
                "id": "filter",
                "source": "net",
                "action": "drag",
                "target": "jar",
                "requires": [
                    "dissolve",
                    "stir"
                ],
                "feedback": "细网勺捞起不溶于水的防水胶囊，盐水从网眼流走。",
                "hints": [
                    "液体和胶囊需要不同的去处。",
                    "细网可以留下胶囊、排走盐水。",
                    "把细网勺拖到结块盐罐。"
                ]
            },
            {
                "id": "open",
                "source": "capsule",
                "action": "swipe",
                "requires": [
                    "filter"
                ],
                "feedback": "旋开胶囊，里面藏着一把小钥匙。",
                "hints": [
                    "胶囊已经被捞出来。",
                    "沿上方的小扣打开。",
                    "向上滑动防水胶囊。"
                ],
                "direction": "up"
            },
            {
                "id": "unlock",
                "source": "key",
                "action": "drag",
                "target": "lock",
                "requires": [
                    "open"
                ],
                "feedback": "钥匙打开留言盒，纸条完全没有受潮。",
                "hints": [
                    "找到钥匙对应的锁。",
                    "留言盒还未打开。",
                    "把胶囊钥匙拖到留言盒锁。"
                ]
            }
        ],
        "ending": "留言说：温柔地理解材料，比用力敲打更有效。",
        "mechanism": "溶解分离与网勺回收",
        "legacyInspiration": "旧第34关：分层处理覆盖物再取出目标",
        "timeLimitSeconds": 250,
        "sceneCaption": "防水留言胶囊被埋在结块盐罐里。"
    }),
    make({
        "id": 38,
        "title": "背面的地址",
        "category": "压痕",
        "background": "market",
        "story": "寄件人忘了写地址，但上层收据留下了压痕。旁边有软垫与钝头铅笔。",
        "goal": "用拓印读出压痕地址",
        "objects": [
            {
                "id": "receipt",
                "label": "压痕收据",
                "kind": "paper",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "place"
                ],
                "description": "纸面有凹下去的笔画，薄纸直接放在硬台上不容易显现。"
            },
            {
                "id": "pad",
                "label": "软质拓印垫",
                "kind": "cushion",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "place"
                ]
            },
            {
                "id": "pencil",
                "label": "钝头铅笔",
                "kind": "rod",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "rub"
                ],
                "decorative": true
            },
            {
                "id": "laid",
                "label": "垫上收据",
                "kind": "paper",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "place"
                ],
                "hiddenWhen": [
                    "rub"
                ]
            },
            {
                "id": "address",
                "label": "显现地址",
                "kind": "paper",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "rub"
                ]
            },
            {
                "id": "east",
                "label": "钟楼东门",
                "kind": "door",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "东门标记与压痕地址不相符。"
            },
            {
                "id": "west",
                "label": "钟楼西门",
                "kind": "door",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "description": "先读取压痕地址，再确认送达位置。"
            }
        ],
        "steps": [
            {
                "id": "place",
                "source": "receipt",
                "action": "drag",
                "target": "pad",
                "requires": [],
                "feedback": "收据放上软垫，纸面的凹凸变得容易拓出。",
                "hints": [
                    "没有墨迹，也可能留下书写痕迹。",
                    "先用软垫承托有压痕的纸。",
                    "把压痕收据拖到软质拓印垫。"
                ]
            },
            {
                "id": "rub",
                "source": "laid",
                "action": "scrub",
                "requires": [
                    "place"
                ],
                "feedback": "侧握钝头铅笔轻轻拓擦，压痕逐笔显现。",
                "hints": [
                    "纸下面还有压痕。",
                    "沿表面轻轻反复摩擦。",
                    "在垫好的纸上来回擦拭。"
                ],
                "minDistance": 0.6
            },
            {
                "id": "read",
                "source": "address",
                "action": "tap",
                "requires": [
                    "rub"
                ],
                "feedback": "完整地址是“钟楼西门”，最后一字不是“东”。",
                "hints": [
                    "不要只凭相似笔画猜地点。",
                    "读出最后的方向字。",
                    "点击显现地址。"
                ]
            },
            {
                "id": "fold-address",
                "source": "address",
                "action": "swipe",
                "requires": [
                    "read"
                ],
                "feedback": "拓印纸沿旧折线收拢，朝西的箭头与门牌记号清楚对应。",
                "hints": [
                    "先把拓印纸折到便于对照的方向。",
                    "顺着旧折线向左折。",
                    "向左滑动显出的地址纸。"
                ],
                "direction": "left"
            },
            {
                "id": "deliver",
                "source": "west",
                "action": "tap",
                "requires": [
                    "read",
                    "fold-address"
                ],
                "feedback": "西门门牌和拓印地址一致，包裹送到了正确入口。",
                "hints": [
                    "把地址与门牌逐字对应。",
                    "拓印写的是西门。",
                    "点击钟楼西门。"
                ]
            }
        ],
        "ending": "被遗忘的地址从压痕中找回，包裹没有再绕远路。",
        "mechanism": "压痕拓印与地址还原",
        "legacyInspiration": "旧第8关：不能直接读出的证据可借工具显形",
        "timeLimitSeconds": 250,
        "sceneCaption": "寄件人忘了写地址，但上层收据留下了压痕。"
    }),
    make({
        "id": 39,
        "title": "一张纸的桥",
        "category": "结构",
        "background": "harbor",
        "story": "小猫要越过一条浅沟，平纸一放就下垂。搭桥卡画着连续折起的三角形。",
        "goal": "改变纸的结构，搭成安全小桥",
        "objects": [
            {
                "id": "guide",
                "label": "搭桥示意卡",
                "kind": "paper",
                "x": 0.2,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "paper",
                "label": "平整厚纸",
                "kind": "paper",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "fold"
                ]
            },
            {
                "id": "folded",
                "label": "折叠桥板",
                "kind": "paper",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "fold"
                ],
                "hiddenWhen": [
                    "place"
                ]
            },
            {
                "id": "gap",
                "label": "浅沟两端",
                "kind": "gap",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "place"
                ],
                "description": "两端有承托台阶，需要能够保持形状的桥板。"
            },
            {
                "id": "bridge",
                "label": "稳固纸桥",
                "kind": "stand",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "place"
                ]
            },
            {
                "id": "cat",
                "label": "等候小猫",
                "kind": "cat",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "cross"
                ]
            },
            {
                "id": "bell",
                "label": "对岸小铃",
                "kind": "bell",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "guide",
                "action": "tap",
                "requires": [],
                "feedback": "示意卡说明连续三角折痕能让同一张厚纸更难弯曲，桥两端须落在台阶上。",
                "hints": [
                    "材料没有变，能改变什么？",
                    "示意卡展示了折叠后的截面。",
                    "点击搭桥示意卡。"
                ]
            },
            {
                "id": "fold",
                "source": "paper",
                "action": "swipe",
                "requires": [
                    "read"
                ],
                "feedback": "沿标记将厚纸折成连续三角，平纸变成保持形状的桥板。",
                "hints": [
                    "平纸太软，会弯下去。",
                    "沿画出的折线向上折成槽形。",
                    "向上滑动平纸，折出桥的结构。"
                ],
                "direction": "up"
            },
            {
                "id": "place",
                "source": "folded",
                "action": "drag",
                "target": "gap",
                "requires": [
                    "fold"
                ],
                "feedback": "折叠桥板的两端稳稳放上承托台阶，中段不再下垂。",
                "hints": [
                    "桥板需要同时搭住两端。",
                    "浅沟两侧有承托台阶。",
                    "把折叠桥板拖到浅沟两端。"
                ]
            },
            {
                "id": "settle",
                "source": "bridge",
                "action": "hold",
                "requires": [
                    "place"
                ],
                "feedback": "桥的两端卡进凹槽，不再晃动。",
                "hints": [
                    "桥搭好还要把两端卡稳。",
                    "稳住桥面让它落入凹槽。",
                    "按住搭好的纸桥约一秒。"
                ],
                "durationMs": 900
            },
            {
                "id": "cross",
                "source": "cat",
                "action": "drag",
                "target": "bridge",
                "requires": [
                    "place",
                    "settle"
                ],
                "feedback": "小猫沿稳固纸桥走到对岸，纸桥保持原形。",
                "hints": [
                    "先确认桥已搭稳，再让小猫通过。",
                    "折叠结构现在承担了重量。",
                    "把等候小猫拖到稳固纸桥。"
                ]
            },
            {
                "id": "ring",
                "source": "bell",
                "action": "tap",
                "requires": [
                    "cross"
                ],
                "feedback": "对岸小铃响起，表示小猫安全到达。",
                "hints": [
                    "确认小猫已经抵达对岸。",
                    "对岸的小铃是到达信号。",
                    "点击对岸小铃。"
                ]
            }
        ],
        "ending": "同一张纸，换一种结构，就能完成原本做不到的事。",
        "mechanism": "折纸结构与过桥救援",
        "legacyInspiration": "旧第45/57关：先搭稳救援通路，再移动角色",
        "timeLimitSeconds": 270,
        "sceneCaption": "小猫要越过一条浅沟，平纸一放就下垂。"
    }),
    make({
        "id": 40,
        "title": "倒流的小水车",
        "category": "流向",
        "background": "workshop",
        "story": "水车一停，水就倒流回桶里。单向阀放反了，入口还卡着一片叶子。",
        "goal": "清理入口并校正单向水路",
        "objects": [
            {
                "id": "guide",
                "label": "水路箭头图",
                "kind": "paper",
                "x": 0.2,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "description": "箭头图说明水从低桶向上进入蓄水盆，单向阀必须阻止停机时的倒流。",
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "leaf",
                "label": "堵口树叶",
                "kind": "leaf",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "clear"
                ],
                "visibleWhen": []
            },
            {
                "id": "inlet",
                "label": "畅通进水口",
                "kind": "gap",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "clear"
                ],
                "hiddenWhen": []
            },
            {
                "id": "valve",
                "label": "单向阀片",
                "kind": "valve",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "valve"
                ],
                "description": "阀片箭头应和图上的水流方向一致，不能反装。",
                "visibleWhen": []
            },
            {
                "id": "seat",
                "label": "向上阀槽",
                "kind": "box",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "wheel",
                "label": "水车手柄",
                "kind": "wheel",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "basin",
                "label": "高处蓄水盆",
                "kind": "bowl",
                "x": 0.5,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "description": "停止摇动后仍能保住水，才证明单向阀方向正确。",
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "seat-grit",
                "label": "阀座里的沙粒",
                "kind": "dust",
                "x": 0.5,
                "y": 0.52,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [],
                "hiddenWhen": [
                    "seat-grit"
                ],
                "art": "dust",
                "description": "沙粒清除后，阀门可以完整贴合阀座。"
            }
        ],
        "steps": [
            {
                "id": "clear",
                "source": "leaf",
                "action": "swipe",
                "requires": [],
                "feedback": "树叶取出，低处进水口畅通。",
                "hints": [
                    "进水处被叶子挡住。",
                    "把叶片向旁边拨开。",
                    "向右滑动进水口的叶子。"
                ],
                "direction": "right"
            },
            {
                "id": "seat-grit",
                "source": "seat-grit",
                "action": "scrub",
                "requires": [],
                "feedback": "沙粒清除后，阀门可以完整贴合阀座。",
                "hints": [
                    "阀门不能压在沙粒上。",
                    "先清理安装位置。",
                    "在阀座里的沙粒上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "valve",
                "source": "valve",
                "action": "drag",
                "target": "seat",
                "requires": [
                    "seat-grit"
                ],
                "feedback": "单向阀沿箭头装入向上阀槽，反方向会自动闭合。",
                "hints": [
                    "阀片应允许哪个方向通过？",
                    "对齐图上从低到高的箭头。",
                    "把单向阀片拖到向上阀槽。"
                ]
            },
            {
                "id": "pump",
                "source": "wheel",
                "action": "hold",
                "requires": [
                    "clear",
                    "valve"
                ],
                "feedback": "摇动手柄，水沿畅通入口进入高处水盆。",
                "hints": [
                    "单向阀已安装，需要持续供水观察。",
                    "稳稳转动水车。",
                    "按住小水车约一秒。"
                ],
                "durationMs": 1100
            },
            {
                "id": "verify",
                "source": "basin",
                "action": "tap",
                "requires": [
                    "pump"
                ],
                "feedback": "停机后水位保持，单向阀阻止了回流。",
                "hints": [
                    "启动成功还不够，检查停下以后。",
                    "正确阀片会把水留在高处。",
                    "点击高处蓄水盆，确认水位保持。"
                ]
            }
        ],
        "ending": "小水车稳定供水，温室的高处花盆也喝到了水。",
        "mechanism": "单向水路与阻塞清理",
        "legacyInspiration": "旧第42关：把源头、路径和结果分别处理",
        "timeLimitSeconds": 250,
        "sceneCaption": "水车一停，水就倒流回桶里。"
    })
];
