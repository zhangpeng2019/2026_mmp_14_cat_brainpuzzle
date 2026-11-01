import { make, CaseDefinition } from './CaseTypes';

/** 糖果美术版：第61—80关，以场景动作和多阶段目标组织谜题。 */
export const CASES_61_80: readonly CaseDefinition[] = [
    make({
        "id": 61,
        "title": "齿孔里的地址",
        "category": "比对",
        "background": "office",
        "story": "旧信封的邮票掉了，地址末行也被遮住。两张散落邮票中只有一张属于它。",
        "goal": "按齿孔断口归还邮票，读出地址",
        "objects": [
            {
                "id": "envelope",
                "label": "缺票信封",
                "kind": "paper",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "description": "右上留着不规则的三角纸齿，不能只看邮票图案。"
            },
            {
                "id": "glass",
                "label": "放大镜",
                "kind": "clue",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "compare"
                ],
                "description": "可以把断口看得更清楚。"
            },
            {
                "id": "stamp-a",
                "label": "整齿邮票",
                "kind": "paper",
                "x": 0.2,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "description": "边缘完整，没有缺失的三角齿。"
            },
            {
                "id": "stamp-b",
                "label": "缺角邮票",
                "kind": "paper",
                "x": 0.8,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "fit"
                ],
                "description": "左下缺一个三角齿，断口有半圈蓝色邮戳。"
            },
            {
                "id": "flap",
                "label": "折起封角",
                "kind": "paper",
                "x": 0.8,
                "y": 0.72,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "unfold"
                ],
                "description": "封角压住了最后一行地址。"
            },
            {
                "id": "address",
                "label": "完整地址",
                "kind": "letter",
                "x": 0.5,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "unfold"
                ]
            },
            {
                "id": "stamp-film",
                "label": "邮票外保护膜",
                "kind": "paper",
                "x": 0.8,
                "y": 0.3,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "inspect"
                ],
                "hiddenWhen": [
                    "stamp-film",
                    "fit"
                ],
                "art": "paper-scrap",
                "description": "保护膜剥开，缺齿边缘完整露出。"
            }
        ],
        "steps": [
            {
                "id": "inspect",
                "source": "envelope",
                "action": "tap",
                "requires": [],
                "feedback": "信封残齿是三角形，蓝色邮戳在断口两边应能接成整圈。",
                "hints": [
                    "先看遗留在信封上的部分。",
                    "残齿和半圈邮戳能同时比对。",
                    "点击缺票信封。"
                ]
            },
            {
                "id": "stamp-film",
                "source": "stamp-film",
                "action": "swipe",
                "requires": [
                    "inspect"
                ],
                "feedback": "保护膜剥开，缺齿边缘完整露出。",
                "hints": [
                    "保护膜挡住齿孔边缘。",
                    "沿卷边向右揭开。",
                    "向右滑动邮票保护膜。"
                ],
                "direction": "right"
            },
            {
                "id": "compare",
                "source": "glass",
                "action": "drag",
                "target": "stamp-b",
                "requires": [
                    "inspect",
                    "stamp-film"
                ],
                "feedback": "放大后，缺角邮票的三角缺口和蓝色弧线都吻合。",
                "hints": [
                    "图案相似还不够。",
                    "看看缺角邮票的边缘和邮戳。",
                    "把放大镜拖到缺角邮票。"
                ]
            },
            {
                "id": "fit",
                "source": "stamp-b",
                "action": "drag",
                "target": "envelope",
                "requires": [
                    "compare"
                ],
                "feedback": "纸齿与邮戳同时接合，确认这张邮票属于信封。",
                "hints": [
                    "把吻合的断口接起来。",
                    "缺角正好补上信封的三角残齿。",
                    "把缺角邮票拖到缺票信封。"
                ]
            },
            {
                "id": "unfold",
                "source": "flap",
                "action": "swipe",
                "requires": [
                    "fit"
                ],
                "feedback": "顺着邮戳方向展开封角，地址显出“桥东花店”。",
                "hints": [
                    "邮票对好后，封口已经松开。",
                    "沿折线展开信封。",
                    "向下滑动信封封口。"
                ],
                "direction": "down"
            }
        ],
        "ending": "旧信终于能送到桥东花店，收信人认出了多年前的邮戳。",
        "mechanism": "齿孔配准与封口展开",
        "legacyInspiration": "旧第4/30关：通过物理轮廓验证而不是猜颜色",
        "timeLimitSeconds": 250,
        "sceneCaption": "旧信封的邮票掉了，地址末行也被遮住。"
    }),
    make({
        "id": 62,
        "title": "拧不开的蜂蜜",
        "category": "道具",
        "background": "kitchen",
        "story": "早餐摊的蜂蜜盖打滑，越用力越握不住。罐身也沾着水。",
        "goal": "稳住罐身，增加摩擦后开盖",
        "objects": [
            {
                "id": "jar",
                "label": "湿蜂蜜罐",
                "kind": "bottle",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "description": "盖上有油，罐底有水；手与瓶盖都在打滑。"
            },
            {
                "id": "cloth",
                "label": "干毛巾",
                "kind": "paper",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "dry"
                ]
            },
            {
                "id": "mat",
                "label": "防滑垫",
                "kind": "tray",
                "x": 0.8,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "steady"
                ],
                "description": "压纹能稳住罐底。"
            },
            {
                "id": "band",
                "label": "宽橡皮圈",
                "kind": "rope",
                "x": 0.2,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "grip"
                ]
            },
            {
                "id": "lid",
                "label": "蜂蜜罐盖",
                "kind": "cover",
                "x": 0.8,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "open"
                ],
                "description": "箭头标着向左转。先让盖子和罐底都不打滑。"
            },
            {
                "id": "honey",
                "label": "打开的蜂蜜",
                "kind": "bottle",
                "x": 0.5,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "open"
                ]
            }
        ],
        "steps": [
            {
                "id": "inspect",
                "source": "jar",
                "action": "tap",
                "requires": [],
                "feedback": "问题是握持打滑：先擦干，再分别稳住底部和瓶盖。",
                "hints": [
                    "不是每个打不开的东西都缺钥匙。",
                    "观察手接触瓶子的地方。",
                    "点击湿蜂蜜罐。"
                ]
            },
            {
                "id": "dry",
                "source": "cloth",
                "action": "drag",
                "target": "jar",
                "requires": [
                    "inspect"
                ],
                "feedback": "毛巾吸走罐身的水，底部不再湿滑。",
                "hints": [
                    "先处理表面的水。",
                    "干毛巾能吸水。",
                    "把干毛巾拖到湿蜂蜜罐。"
                ]
            },
            {
                "id": "steady",
                "source": "mat",
                "action": "drag",
                "target": "jar",
                "requires": [
                    "dry"
                ],
                "feedback": "防滑垫托住罐底，罐身不会跟着转。",
                "hints": [
                    "转盖时罐身也要稳。",
                    "有压纹的垫子能固定底部。",
                    "把防滑垫拖到湿蜂蜜罐。"
                ]
            },
            {
                "id": "grip",
                "source": "band",
                "action": "drag",
                "target": "lid",
                "requires": [
                    "dry"
                ],
                "feedback": "宽橡皮圈套住罐盖，手能牢牢握住它。",
                "hints": [
                    "盖子还缺少摩擦。",
                    "橡皮圈能贴住光滑盖边。",
                    "把宽橡皮圈拖到蜂蜜罐盖。"
                ]
            },
            {
                "id": "open",
                "source": "lid",
                "action": "hold",
                "requires": [
                    "steady",
                    "grip"
                ],
                "feedback": "稳住罐身向左转，罐盖轻松打开了。",
                "hints": [
                    "罐身和瓶盖的抓握条件都改善了。",
                    "稳住瓶身持续拧动。",
                    "按住防滑带包好的瓶盖约一秒。"
                ],
                "durationMs": 1200
            }
        ],
        "ending": "摊主给每份早餐添了一点蜂蜜，小猫得到一碗温水。",
        "mechanism": "增加摩擦与稳定开罐",
        "legacyInspiration": "旧第22关：先改变接触条件再施力",
        "timeLimitSeconds": 250,
        "sceneCaption": "早餐摊的蜂蜜盖打滑，越用力越握不住。"
    }),
    make({
        "id": 63,
        "title": "封条上的灰线",
        "category": "推理",
        "background": "gallery",
        "story": "展柜修好后换过封条。两份维修记录中，有一份把更换时间写错了。",
        "goal": "用灰尘层次核对正确维修记录",
        "objects": [
            {
                "id": "seal",
                "label": "展柜封条",
                "kind": "paper",
                "x": 0.5,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "description": "封条边缘压住了一条灰线，纸面却没有灰。"
            },
            {
                "id": "dust",
                "label": "柜沿灰线",
                "kind": "footprint",
                "x": 0.5,
                "y": 0.7,
                "w": 0.15,
                "h": 0.15,
                "description": "灰线进入封条下面，说明先有灰尘，再贴新封条。"
            },
            {
                "id": "cleaning",
                "label": "清扫记录",
                "kind": "letter",
                "x": 0.2,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "description": "记录：九点落灰，十点停止清扫；此后没有再扬尘。"
            },
            {
                "id": "early",
                "label": "八点维修单",
                "kind": "letter",
                "x": 0.2,
                "y": 0.6,
                "w": 0.15,
                "h": 0.15,
                "description": "声称八点已换封条。若属实，九点的灰应落在封条上面。"
            },
            {
                "id": "late",
                "label": "十一点维修单",
                "kind": "letter",
                "x": 0.8,
                "y": 0.6,
                "w": 0.15,
                "h": 0.15,
                "description": "声称十一点更换，灰尘会被新封条压在下面。"
            },
            {
                "id": "lamp",
                "label": "侧照小灯",
                "kind": "lamp",
                "x": 0.5,
                "y": 0.87,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "side-light"
                ]
            }
        ],
        "steps": [
            {
                "id": "seal",
                "source": "seal",
                "action": "tap",
                "requires": [],
                "feedback": "封条表面干净，灰线在它的下方。",
                "hints": [
                    "不要只看印章是否漂亮。",
                    "比较封条表面和下面的灰。",
                    "点击展柜封条。"
                ]
            },
            {
                "id": "side-light",
                "source": "lamp",
                "action": "drag",
                "target": "dust",
                "requires": [],
                "feedback": "侧光掠过灰线，封条上的浮灰和下面的旧灰层分开了。",
                "hints": [
                    "灰尘的上下层不容易直接看出。",
                    "用斜光看起伏。",
                    "把侧照小灯拖到灰尘痕迹。"
                ]
            },
            {
                "id": "dust",
                "source": "dust",
                "action": "hold",
                "requires": [
                    "side-light"
                ],
                "feedback": "灰线在纸下连续延伸，新封条贴在已有灰尘上。",
                "hints": [
                    "不要擦掉证据。",
                    "在侧光下稳定观察覆盖层。",
                    "按住灰线约一秒。"
                ],
                "durationMs": 900
            },
            {
                "id": "record",
                "source": "cleaning",
                "action": "tap",
                "requires": [],
                "feedback": "扬尘只发生在九点到十点，封条应在十点之后更换。",
                "hints": [
                    "确定灰尘出现的时间。",
                    "清扫记录有开始和结束时间。",
                    "点击清扫记录。"
                ]
            },
            {
                "id": "choose",
                "source": "late",
                "action": "tap",
                "requires": [
                    "seal",
                    "dust",
                    "record"
                ],
                "feedback": "十一点换封条符合灰在下、纸在上的层次。",
                "hints": [
                    "选择与三条证据同时一致的记录。",
                    "维修应在十点清扫结束后。",
                    "点击十一点维修单。"
                ]
            }
        ],
        "ending": "修复师改正了抄写错误，展柜的维修档案完整归档。",
        "mechanism": "灰尘层次与时间先后",
        "legacyInspiration": "旧第8/23关：一处痕迹里的覆盖关系可以排除时间说法",
        "timeLimitSeconds": 250,
        "sceneCaption": "展柜修好后换过封条。"
    }),
    make({
        "id": 64,
        "title": "风琴少了一口气",
        "category": "机关",
        "background": "workshop",
        "story": "广场风琴的踏板能动，管口却没有风。气囊附近传来细小的嘶嘶声。",
        "goal": "找出漏气处并恢复风琴",
        "objects": [
            {
                "id": "pedal",
                "label": "风琴踏板",
                "kind": "button",
                "x": 0.5,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "description": "踩下后，气囊一侧有嘶嘶声，琴管口没有气流。"
            },
            {
                "id": "strip",
                "label": "薄纸条",
                "kind": "paper",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "trace"
                ]
            },
            {
                "id": "bellows",
                "label": "折叠气囊",
                "kind": "box",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "description": "边缝可能漏气，薄纸靠近时能显示气流方向。"
            },
            {
                "id": "patch",
                "label": "软皮补片",
                "kind": "paper",
                "x": 0.8,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "patch"
                ]
            },
            {
                "id": "hole",
                "label": "漏气裂缝",
                "kind": "gap",
                "x": 0.8,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "trace"
                ],
                "hiddenWhen": [
                    "patch"
                ]
            },
            {
                "id": "key",
                "label": "试音琴键",
                "kind": "button",
                "x": 0.5,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "hole-grit",
                "label": "漏孔边的粉尘",
                "kind": "dust",
                "x": 0.8,
                "y": 0.5,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "trace"
                ],
                "hiddenWhen": [
                    "hole-grit",
                    "patch"
                ],
                "art": "dust",
                "description": "漏孔边缘擦净，补片能平整粘住。"
            }
        ],
        "steps": [
            {
                "id": "test",
                "source": "pedal",
                "action": "tap",
                "requires": [],
                "feedback": "气囊鼓起后立即瘪下，漏气声来自右侧边缝。",
                "hints": [
                    "先确认气有没有被送进去。",
                    "踏板能让气囊短暂鼓起。",
                    "点击风琴踏板。"
                ]
            },
            {
                "id": "trace",
                "source": "strip",
                "action": "drag",
                "target": "bellows",
                "requires": [
                    "test"
                ],
                "feedback": "薄纸被边缝吹起，漏气裂缝显露出来。",
                "hints": [
                    "用轻的东西观察气流。",
                    "薄纸条会被漏出的气吹动。",
                    "把薄纸条拖到折叠气囊。"
                ]
            },
            {
                "id": "hole-grit",
                "source": "hole-grit",
                "action": "scrub",
                "requires": [
                    "trace"
                ],
                "feedback": "漏孔边缘擦净，补片能平整粘住。",
                "hints": [
                    "补片不能粘在灰尘上。",
                    "先把漏孔周围擦干净。",
                    "在漏孔边的粉尘上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "patch",
                "source": "patch",
                "action": "drag",
                "target": "hole",
                "requires": [
                    "trace",
                    "hole-grit"
                ],
                "feedback": "柔软补片贴合折痕，堵住裂缝又不妨碍气囊伸缩。",
                "hints": [
                    "需要能随气囊弯折的补料。",
                    "软皮补片能贴住裂缝。",
                    "把软皮补片拖到漏气裂缝。"
                ]
            },
            {
                "id": "pump",
                "source": "pedal",
                "action": "hold",
                "requires": [
                    "patch"
                ],
                "feedback": "再次踩下，气囊保持鼓起，气流到达琴管。",
                "hints": [
                    "漏洞已经补好。",
                    "连续供气检验气囊。",
                    "按住风琴踏板约一秒。"
                ],
                "durationMs": 1100
            },
            {
                "id": "play",
                "source": "key",
                "action": "tap",
                "requires": [
                    "pump"
                ],
                "feedback": "试音琴键发出稳定长音，风琴恢复了。",
                "hints": [
                    "有气之后再测试发声。",
                    "按下试音琴键。",
                    "点击试音琴键，确认长音。"
                ]
            }
        ],
        "ending": "音乐重新响起，广场的鸽子与猫咪都安静地听了一会儿。",
        "mechanism": "气流寻漏与补洞发声",
        "legacyInspiration": "旧第21关：用道具观察不同位置的反应",
        "timeLimitSeconds": 270,
        "sceneCaption": "广场风琴的踏板能动，管口却没有风。"
    }),
    make({
        "id": 65,
        "title": "庆典餐车分拣",
        "category": "配对",
        "background": "kitchen",
        "mechanism": "多角色需求与多目标分拣",
        "legacyInspiration": "旧第53/54关：把多个不同物件分别送到正确对象",
        "sceneCaption": "三位客人点了不同餐点，盘子与饮品要按图案配对。",
        "story": "庆典餐车太忙了。灰猫只要温水，橘猫订了鱼餐，小兔订了柠檬饮。先整理托盘，再把餐点送对人。",
        "goal": "整理托盘，给三位客人送对餐点",
        "timeLimitSeconds": 240,
        "objects": [
            {
                "id": "gray",
                "label": "要温水的灰猫",
                "kind": "cat",
                "x": 0.18,
                "y": 0.35,
                "w": 0.25,
                "h": 0.29,
                "art": "cat-gray",
                "description": "杯子图案旁没有冰块，也没有水果；它只点了温水。"
            },
            {
                "id": "orange",
                "label": "要鱼餐的橘猫",
                "kind": "cat",
                "x": 0.5,
                "y": 0.35,
                "w": 0.25,
                "h": 0.29,
                "art": "cat-orange",
                "description": "它的订单画着一条鱼。"
            },
            {
                "id": "rabbit",
                "label": "要柠檬饮的小兔",
                "kind": "person",
                "x": 0.82,
                "y": 0.35,
                "w": 0.25,
                "h": 0.29,
                "art": "rabbit-postman",
                "description": "订单上的柠檬切片对应酸甜饮品。"
            },
            {
                "id": "tray",
                "label": "叠住餐点的托盘",
                "kind": "tray",
                "x": 0.5,
                "y": 0.66,
                "w": 0.32,
                "h": 0.2,
                "hiddenWhen": [
                    "spread"
                ],
                "art": "tray"
            },
            {
                "id": "water",
                "label": "温水杯",
                "kind": "bottle",
                "x": 0.17,
                "y": 0.73,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "spread"
                ],
                "hiddenWhen": [
                    "water"
                ],
                "art": "bottle-empty"
            },
            {
                "id": "fish",
                "label": "鱼餐",
                "kind": "fish",
                "x": 0.5,
                "y": 0.77,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "spread"
                ],
                "hiddenWhen": [
                    "fish"
                ],
                "art": "fish"
            },
            {
                "id": "lemon",
                "label": "柠檬饮",
                "kind": "lemon",
                "x": 0.82,
                "y": 0.73,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "spread"
                ],
                "hiddenWhen": [
                    "lemon"
                ],
                "art": "lemon"
            },
            {
                "id": "cloth",
                "label": "小餐巾",
                "kind": "cloth",
                "x": 0.17,
                "y": 0.55,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "fish"
                ],
                "hiddenWhen": [
                    "napkin"
                ],
                "art": "cloth"
            },
            {
                "id": "bell",
                "label": "取餐小铃",
                "kind": "bell",
                "x": 0.82,
                "y": 0.57,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "water",
                    "fish",
                    "lemon"
                ],
                "art": "bell"
            }
        ],
        "steps": [
            {
                "id": "spread",
                "source": "tray",
                "action": "swipe",
                "requires": [],
                "feedback": "托盘移开，三份不同图案的餐点分开摆好。",
                "hints": [
                    "餐点叠在一起，看不清内容。",
                    "先把上面的托盘移到旁边。",
                    "向右滑动上层托盘。"
                ],
                "direction": "right"
            },
            {
                "id": "water",
                "source": "water",
                "action": "drag",
                "target": "gray",
                "requires": [
                    "spread"
                ],
                "feedback": "温水送给没有点冰块或水果的灰猫。",
                "hints": [
                    "灰猫只点了清水。",
                    "选择没有鱼或柠檬图案的杯子。",
                    "把温水杯拖给灰猫。"
                ]
            },
            {
                "id": "fish",
                "source": "fish",
                "action": "drag",
                "target": "orange",
                "requires": [
                    "spread"
                ],
                "feedback": "鱼餐放到橘猫面前，订单图案吻合。",
                "hints": [
                    "谁的订单画着鱼？",
                    "中间的橘猫正在等鱼餐。",
                    "把鱼餐拖给橘猫。"
                ]
            },
            {
                "id": "lemon",
                "source": "lemon",
                "action": "drag",
                "target": "rabbit",
                "requires": [
                    "spread"
                ],
                "feedback": "柠檬饮送给小兔，三份餐点都匹配了。",
                "hints": [
                    "剩下的订单画着柠檬。",
                    "右侧小兔需要酸甜饮品。",
                    "把柠檬饮拖给小兔。"
                ]
            },
            {
                "id": "napkin",
                "source": "cloth",
                "action": "drag",
                "target": "orange",
                "requires": [
                    "fish"
                ],
                "feedback": "小餐巾铺在鱼餐旁，橘猫可以干净地用餐。",
                "hints": [
                    "鱼餐还需要一张餐巾。",
                    "把小餐巾送到鱼餐一侧。",
                    "把小餐巾拖给橘猫。"
                ]
            },
            {
                "id": "serve",
                "source": "bell",
                "action": "hold",
                "requires": [
                    "water",
                    "fish",
                    "lemon",
                    "napkin"
                ],
                "feedback": "铃声通知三位客人开餐，餐车分拣完成。",
                "hints": [
                    "所有餐点与餐巾都到位了。",
                    "通知大家可以开始用餐。",
                    "按住取餐小铃约一秒。"
                ],
                "durationMs": 900
            }
        ],
        "ending": "一份图案对应一位客人，餐车恢复了有条不紊的节奏。"
    }),
    make({
        "id": 66,
        "title": "顺流的渡口",
        "category": "方向",
        "background": "harbor",
        "story": "渡口指示牌脱落。船夫说“货仓在桥的下游”，地图却没有标北方。",
        "goal": "用水流方向找出货仓渡口",
        "objects": [
            {
                "id": "note",
                "label": "船夫便条",
                "kind": "letter",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "bridge",
                "label": "桥边水面",
                "kind": "water",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "description": "泡沫从左侧桥洞流向右侧芦苇，右边是下游。"
            },
            {
                "id": "leaf",
                "label": "漂浮树叶",
                "kind": "leaf",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "flow"
                ]
            },
            {
                "id": "map",
                "label": "无北向地图",
                "kind": "map",
                "x": 0.8,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "图中桥左为石阶渡口，桥右为芦苇渡口。上下游由水流决定，与图纸上下无关。"
            },
            {
                "id": "stone-dock",
                "label": "石阶渡口",
                "kind": "door",
                "x": 0.2,
                "y": 0.55,
                "w": 0.15,
                "h": 0.15,
                "description": "石阶在桥左，与实际水流方向相反，是上游。"
            },
            {
                "id": "reed-dock",
                "label": "芦苇渡口",
                "kind": "door",
                "x": 0.8,
                "y": 0.55,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "dock-reed",
                "label": "渡口缠绕芦苇",
                "kind": "plant",
                "x": 0.8,
                "y": 0.55,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "read",
                    "flow",
                    "map"
                ],
                "hiddenWhen": [
                    "dock-reed"
                ],
                "art": "plant-bloom",
                "description": "芦苇拨开，顺流渡口的系船桩露出来。"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "note",
                "action": "tap",
                "requires": [],
                "feedback": "便条写着：货仓在桥的下游，不要按地图的上下猜。",
                "hints": [
                    "先确定指路使用什么参照。",
                    "便条说的是上下游。",
                    "点击船夫便条。"
                ]
            },
            {
                "id": "flow",
                "source": "leaf",
                "action": "drag",
                "target": "bridge",
                "requires": [
                    "read"
                ],
                "feedback": "树叶从左往右漂，右侧芦苇方向就是下游。",
                "hints": [
                    "水流能给出方向。",
                    "让树叶随水漂一小段。",
                    "把漂浮树叶拖到桥边水面。"
                ]
            },
            {
                "id": "map",
                "source": "map",
                "action": "tap",
                "requires": [],
                "feedback": "地图的桥右侧标着芦苇渡口，与实地芦苇相符。",
                "hints": [
                    "把实景特征和地图对上。",
                    "芦苇在桥右侧。",
                    "点击无北向地图。"
                ]
            },
            {
                "id": "dock-reed",
                "source": "dock-reed",
                "action": "swipe",
                "requires": [
                    "read",
                    "flow",
                    "map"
                ],
                "feedback": "芦苇拨开，顺流渡口的系船桩露出来。",
                "hints": [
                    "方向已经确认，但渡口入口还被遮着。",
                    "把芦苇向右拨开。",
                    "向右滑动渡口芦苇。"
                ],
                "direction": "right"
            },
            {
                "id": "choose",
                "source": "reed-dock",
                "action": "tap",
                "requires": [
                    "read",
                    "flow",
                    "map",
                    "dock-reed"
                ],
                "feedback": "芦苇渡口在桥的下游，货仓位置确认。",
                "hints": [
                    "用水流方向选择渡口。",
                    "右侧芦苇才是下游。",
                    "点击芦苇渡口。"
                ]
            }
        ],
        "ending": "货物送对了渡口，船夫答应给指示牌补上水流箭头。",
        "mechanism": "流向参照与上下游定位",
        "legacyInspiration": "旧第18/55关：确定环境参照后选择安全路线",
        "timeLimitSeconds": 250,
        "sceneCaption": "渡口指示牌脱落。"
    }),
    make({
        "id": 67,
        "title": "花盆底的薄膜",
        "category": "因果",
        "background": "sunroom",
        "story": "新花盆浇一点水就积成小池。照护卡说根部需要排水，花盆底似乎贴着透明包装。",
        "goal": "疏通排水，安全移栽小苗",
        "objects": [
            {
                "id": "guide",
                "label": "移栽说明",
                "kind": "letter",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "pot",
                "label": "积水花盆",
                "kind": "plant",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "description": "有包装膜时水无法从底部排出，应先检查底部，而非继续浇水。"
            },
            {
                "id": "film",
                "label": "底部薄膜",
                "kind": "paper",
                "x": 0.8,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "peel"
                ]
            },
            {
                "id": "tray",
                "label": "接水托盘",
                "kind": "tray",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "drain"
                ]
            },
            {
                "id": "pebbles",
                "label": "透水小石",
                "kind": "stone",
                "x": 0.5,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "layer"
                ]
            },
            {
                "id": "seedling",
                "label": "待栽小苗",
                "kind": "plant",
                "x": 0.8,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "plant"
                ]
            },
            {
                "id": "grown",
                "label": "栽好的苗",
                "kind": "plant",
                "x": 0.5,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "plant"
                ]
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "guide",
                "action": "tap",
                "requires": [],
                "feedback": "说明：揭去包装膜，接住多余水，再铺透水层后移栽。",
                "hints": [
                    "先看新盆的准备要求。",
                    "底部包装可能还没拆。",
                    "点击移栽说明。"
                ]
            },
            {
                "id": "peel",
                "source": "film",
                "action": "swipe",
                "requires": [
                    "read"
                ],
                "feedback": "薄膜揭开，底部露出三个排水孔。",
                "hints": [
                    "薄膜封住了排水孔。",
                    "沿露出的边缘揭开。",
                    "向右滑动花盆底的薄膜。"
                ],
                "direction": "right"
            },
            {
                "id": "drain",
                "source": "tray",
                "action": "drag",
                "target": "pot",
                "requires": [
                    "peel"
                ],
                "feedback": "托盘接住流出的水，花盆不再积成水池。",
                "hints": [
                    "排出的水也要妥善接住。",
                    "托盘应放到盆底。",
                    "把接水托盘拖到积水花盆。"
                ]
            },
            {
                "id": "drip",
                "source": "pot",
                "action": "hold",
                "requires": [
                    "drain"
                ],
                "feedback": "多余积水流进托盘，盆底可以铺入透水层。",
                "hints": [
                    "盆底还积着水。",
                    "先让多余水分排出。",
                    "按住花盆约一秒。"
                ],
                "durationMs": 1000
            },
            {
                "id": "layer",
                "source": "pebbles",
                "action": "drag",
                "target": "pot",
                "requires": [
                    "drain",
                    "drip"
                ],
                "feedback": "疏松小石铺成透水层，排水孔仍通畅。",
                "hints": [
                    "移栽前让盆底保持通气。",
                    "说明要求先铺透水小石。",
                    "把透水小石拖到积水花盆。"
                ]
            },
            {
                "id": "plant",
                "source": "seedling",
                "action": "drag",
                "target": "pot",
                "requires": [
                    "layer"
                ],
                "feedback": "小苗安稳落盆，土壤湿润却没有积水。",
                "hints": [
                    "盆底准备好后再移栽。",
                    "待栽小苗可以入盆了。",
                    "把待栽小苗拖到积水花盆。"
                ]
            }
        ],
        "ending": "小苗有了透气的新家，猫奶奶给侦探社寄来一张叶片书签。",
        "mechanism": "排水层与植物移栽",
        "legacyInspiration": "旧第2关：修好容器环境后才能安置角色",
        "timeLimitSeconds": 270,
        "sceneCaption": "新花盆浇一点水就积成小池。"
    }),
    make({
        "id": 68,
        "title": "阁楼里的六个影子",
        "category": "寻物",
        "background": "attic",
        "mechanism": "直接目标与多种遮挡寻猫",
        "legacyInspiration": "旧第3/26关：显眼目标、物件后目标、擦拭目标和特殊手势目标混合",
        "sceneCaption": "书架、箱子、窗台与小床，各藏着一位爱捉迷藏的伙伴。",
        "story": "阁楼亮起了六双小眼睛。猫咪们把不同花色融进物件里，找到全部伙伴再结束捉迷藏。",
        "goal": "找到阁楼里六只躲藏的小猫",
        "timeLimitSeconds": 300,
        "objects": [
            {
                "id": "orange",
                "label": "窗边橘猫",
                "kind": "cat",
                "x": 0.17,
                "y": 0.27,
                "w": 0.2,
                "h": 0.21,
                "hiddenWhen": [
                    "orange"
                ],
                "art": "cat-orange"
            },
            {
                "id": "gray",
                "label": "床边灰猫",
                "kind": "cat",
                "x": 0.79,
                "y": 0.79,
                "w": 0.22,
                "h": 0.22,
                "hiddenWhen": [
                    "gray"
                ],
                "art": "cat-gray"
            },
            {
                "id": "box",
                "label": "盖住黑猫的箱子",
                "kind": "box",
                "x": 0.2,
                "y": 0.54,
                "w": 0.25,
                "h": 0.25,
                "hiddenWhen": [
                    "box"
                ],
                "art": "item-box"
            },
            {
                "id": "black",
                "label": "箱里的黑猫",
                "kind": "cat",
                "x": 0.2,
                "y": 0.54,
                "w": 0.23,
                "h": 0.23,
                "visibleWhen": [
                    "box"
                ],
                "hiddenWhen": [
                    "black"
                ],
                "art": "cat-black"
            },
            {
                "id": "book",
                "label": "书架上的大书",
                "kind": "book",
                "x": 0.5,
                "y": 0.25,
                "w": 0.24,
                "h": 0.23,
                "hiddenWhen": [
                    "book"
                ],
                "art": "book-blue"
            },
            {
                "id": "white",
                "label": "书后的白猫",
                "kind": "cat",
                "x": 0.5,
                "y": 0.25,
                "w": 0.22,
                "h": 0.23,
                "visibleWhen": [
                    "book"
                ],
                "hiddenWhen": [
                    "white"
                ],
                "art": "cat-white"
            },
            {
                "id": "fog",
                "label": "窗台雾气",
                "kind": "window",
                "x": 0.8,
                "y": 0.33,
                "w": 0.25,
                "h": 0.26,
                "hiddenWhen": [
                    "fog"
                ],
                "art": "glass-fog"
            },
            {
                "id": "kitten",
                "label": "窗台小奶猫",
                "kind": "cat",
                "x": 0.8,
                "y": 0.33,
                "w": 0.23,
                "h": 0.23,
                "visibleWhen": [
                    "fog"
                ],
                "hiddenWhen": [
                    "kitten"
                ],
                "art": "cat-kitten"
            },
            {
                "id": "bed",
                "label": "会动的小毯子",
                "kind": "bed",
                "x": 0.5,
                "y": 0.69,
                "w": 0.3,
                "h": 0.25,
                "hiddenWhen": [
                    "blanket"
                ],
                "art": "cushion"
            },
            {
                "id": "sleep",
                "label": "毯子下睡猫",
                "kind": "cat",
                "x": 0.5,
                "y": 0.68,
                "w": 0.23,
                "h": 0.24,
                "visibleWhen": [
                    "blanket"
                ],
                "hiddenWhen": [
                    "sleep"
                ],
                "art": "cat-sleep"
            }
        ],
        "steps": [
            {
                "id": "orange",
                "source": "orange",
                "action": "tap",
                "requires": [],
                "feedback": "橘猫从窗边跳到集合处。",
                "hints": [
                    "先找没有完全藏住的。",
                    "左上窗边有橘耳朵。",
                    "点击窗边橘猫。"
                ]
            },
            {
                "id": "gray",
                "source": "gray",
                "action": "tap",
                "requires": [],
                "feedback": "灰猫摇着尾巴加入伙伴。",
                "hints": [
                    "床边露着灰色尾巴。",
                    "看看右下角。",
                    "点击右下方灰猫。"
                ]
            },
            {
                "id": "box",
                "source": "box",
                "action": "swipe",
                "requires": [],
                "feedback": "箱子移开，黑猫的圆眼睛出现了。",
                "hints": [
                    "木箱似乎会眨眼。",
                    "把箱子横向移开。",
                    "向左滑动木箱。"
                ],
                "direction": "left"
            },
            {
                "id": "black",
                "source": "black",
                "action": "tap",
                "requires": [
                    "box"
                ],
                "feedback": "黑猫从箱子里轻巧跳出。",
                "hints": [
                    "箱子后面露出了谁？",
                    "黑色猫脸已清楚可见。",
                    "点击箱里的黑猫。"
                ]
            },
            {
                "id": "book",
                "source": "book",
                "action": "swipe",
                "requires": [],
                "feedback": "大书抽开，白猫藏在书架空格里。",
                "hints": [
                    "书边有一只白爪子。",
                    "把大书向下抽出来。",
                    "向下滑动书架上的大书。"
                ],
                "direction": "down"
            },
            {
                "id": "white",
                "source": "white",
                "action": "tap",
                "requires": [
                    "book"
                ],
                "feedback": "白猫收起小爪，慢慢走到集合处。",
                "hints": [
                    "书后露出了白猫。",
                    "已经没有遮挡了。",
                    "点击书后的白猫。"
                ]
            },
            {
                "id": "fog",
                "source": "fog",
                "action": "scrub",
                "requires": [],
                "feedback": "窗台雾气擦开，一只更小的猫咪显出身影。",
                "hints": [
                    "窗台上的小眼睛藏在雾中。",
                    "擦净雾气看看。",
                    "在窗台雾气上来回擦拭。"
                ],
                "minDistance": 0.5
            },
            {
                "id": "kitten",
                "source": "kitten",
                "action": "tap",
                "requires": [
                    "fog"
                ],
                "feedback": "小奶猫被找到，发出细细的喵声。",
                "hints": [
                    "小奶猫已经显出来。",
                    "看清窗台中间。",
                    "点击窗台小奶猫。"
                ]
            },
            {
                "id": "blanket",
                "source": "bed",
                "action": "swipe",
                "requires": [],
                "feedback": "毯子掀起，原来最后一只伙伴已经睡着。",
                "hints": [
                    "毯子在轻轻起伏。",
                    "把毯子向上掀开。",
                    "向上滑动小毯子。"
                ],
                "direction": "up"
            },
            {
                "id": "sleep",
                "source": "sleep",
                "action": "hold",
                "requires": [
                    "blanket"
                ],
                "feedback": "轻轻呼唤后，睡猫睁开眼睛，六只伙伴全部找到。",
                "hints": [
                    "最后一只睡着了，别吓它。",
                    "停留片刻温柔呼唤。",
                    "按住毯子下的睡猫约一秒。"
                ],
                "durationMs": 900
            }
        ],
        "ending": "六只猫有六种藏法，阁楼捉迷藏终于结束。"
    }),
    make({
        "id": 69,
        "title": "多出来的两百克",
        "category": "测量",
        "background": "market",
        "story": "空篮也让秤显示200克。顾客要500克饼干，应该看净重而非带篮总重。",
        "goal": "去皮后称出正确的饼干份量",
        "objects": [
            {
                "id": "order",
                "label": "五百克订单",
                "kind": "letter",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "basket",
                "label": "空包装篮",
                "kind": "box",
                "x": 0.2,
                "y": 0.7,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "basket"
                ]
            },
            {
                "id": "scale",
                "label": "电子秤",
                "kind": "tray",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "tare",
                "label": "去皮键",
                "kind": "button",
                "x": 0.8,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "description": "去皮会把当前空篮重量记为零。先放空篮。"
            },
            {
                "id": "small",
                "label": "三百克袋",
                "kind": "box",
                "x": 0.5,
                "y": 0.78,
                "w": 0.15,
                "h": 0.15,
                "description": "袋中净饼干只有300克，不能把篮重凑进订单。"
            },
            {
                "id": "right",
                "label": "五百克袋",
                "kind": "box",
                "x": 0.8,
                "y": 0.78,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "weigh"
                ]
            },
            {
                "id": "parcel",
                "label": "合格饼干篮",
                "kind": "box",
                "x": 0.5,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "weigh"
                ]
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "order",
                "action": "tap",
                "requires": [],
                "feedback": "订单要求净饼干500克，包装篮不计入。",
                "hints": [
                    "顾客买的是包装还是食物？",
                    "订单明确写着净重。",
                    "点击五百克订单。"
                ]
            },
            {
                "id": "zero",
                "source": "scale",
                "action": "hold",
                "requires": [
                    "read"
                ],
                "feedback": "空秤指针回到零点，接下来才能测容器自身重量。",
                "hints": [
                    "秤上还没有东西，指针却偏着。",
                    "先做空秤校零。",
                    "按住空秤约一秒。"
                ],
                "durationMs": 1000
            },
            {
                "id": "basket",
                "source": "basket",
                "action": "drag",
                "target": "scale",
                "requires": [
                    "read",
                    "zero"
                ],
                "feedback": "空篮放上秤，读数200克，这是包装重量。",
                "hints": [
                    "先测空包装占了多少重量。",
                    "空篮要放到秤上。",
                    "把空包装篮拖到电子秤。"
                ]
            },
            {
                "id": "tare",
                "source": "tare",
                "action": "swipe",
                "requires": [
                    "basket"
                ],
                "feedback": "去皮后读数归零，接下来显示的只有饼干净重。",
                "hints": [
                    "篮子已经放到秤上。",
                    "把这部分固定重量从显示里扣除。",
                    "向左滑动去皮按钮。"
                ],
                "direction": "left"
            },
            {
                "id": "weigh",
                "source": "right",
                "action": "drag",
                "target": "scale",
                "requires": [
                    "tare"
                ],
                "feedback": "净重显示500克，连篮总重700克，订单完成。",
                "hints": [
                    "选择真正有500克饼干的一袋。",
                    "300克加篮重不是净重500克。",
                    "把五百克袋拖到电子秤。"
                ]
            }
        ],
        "ending": "顾客拿到足量饼干，摊主也学会了先称包装再去皮。",
        "mechanism": "空秤校零与容器去皮",
        "legacyInspiration": "旧第4关：校验检测基准之后，结论才可信",
        "timeLimitSeconds": 250,
        "sceneCaption": "空篮也让秤显示200克。"
    }),
    make({
        "id": 70,
        "title": "木纽扣的去向",
        "category": "分类",
        "background": "office",
        "story": "裁缝要找一枚木纽扣。托盘里混着铁扣与木扣，磁铁可以帮忙分开材料。",
        "goal": "利用材料差异找回木纽扣",
        "objects": [
            {
                "id": "sample",
                "label": "衣服扣印",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "印痕是四孔圆扣，裁缝注明材质为木头。"
            },
            {
                "id": "magnet",
                "label": "小磁铁",
                "kind": "magnet",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "separate"
                ]
            },
            {
                "id": "tray",
                "label": "混合扣盘",
                "kind": "tray",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "separate"
                ],
                "description": "说明卡：铁扣会被吸起，木扣不会。"
            },
            {
                "id": "metal",
                "label": "吸起的铁扣",
                "kind": "gear",
                "x": 0.8,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "separate"
                ],
                "description": "铁扣虽是圆的，但材质不符合木扣要求。"
            },
            {
                "id": "wood",
                "label": "四孔木扣",
                "kind": "button",
                "x": 0.5,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "separate"
                ],
                "hiddenWhen": [
                    "match"
                ]
            },
            {
                "id": "shirt",
                "label": "缺扣衣服",
                "kind": "paper",
                "x": 0.8,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "fixed",
                "label": "补好的衣服",
                "kind": "paper",
                "x": 0.5,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "sew"
                ]
            },
            {
                "id": "thread",
                "label": "针线包",
                "kind": "rope",
                "x": 0.2,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "sew"
                ]
            },
            {
                "id": "old-thread",
                "label": "扣孔上的断线",
                "kind": "rope",
                "x": 0.8,
                "y": 0.75,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "separate"
                ],
                "hiddenWhen": [
                    "old-thread"
                ],
                "art": "rope",
                "description": "旧断线清理掉，原扣孔重新露出来。"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "sample",
                "action": "tap",
                "requires": [],
                "feedback": "要找的是四孔圆形木扣，形状与材料都必须符合。",
                "hints": [
                    "先确认失物的两个条件。",
                    "不仅要圆形，还必须是木头。",
                    "点击衣服扣印。"
                ]
            },
            {
                "id": "separate",
                "source": "magnet",
                "action": "drag",
                "target": "tray",
                "requires": [
                    "read"
                ],
                "feedback": "铁扣被吸起，四孔木扣留在托盘中。",
                "hints": [
                    "用材料性质把混合物分开。",
                    "说明卡写着木扣不被磁铁吸起。",
                    "把小磁铁拖到混合扣盘。"
                ]
            },
            {
                "id": "old-thread",
                "source": "old-thread",
                "action": "scrub",
                "requires": [
                    "separate"
                ],
                "feedback": "旧断线清理掉，原扣孔重新露出来。",
                "hints": [
                    "新纽扣不能压在断线团上。",
                    "先把扣孔里的旧线理掉。",
                    "在扣孔断线上来回擦动。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "match",
                "source": "wood",
                "action": "drag",
                "target": "shirt",
                "requires": [
                    "separate",
                    "old-thread"
                ],
                "feedback": "木扣的四孔与旧线痕完全吻合，失物确认。",
                "hints": [
                    "从没有被吸起的纽扣里比对孔位。",
                    "四孔木扣符合两个条件。",
                    "把四孔木扣拖到缺扣衣服。"
                ]
            },
            {
                "id": "sew",
                "source": "thread",
                "action": "drag",
                "target": "shirt",
                "requires": [
                    "match"
                ],
                "feedback": "按原孔位缝好纽扣，衣服恢复整齐。",
                "hints": [
                    "确认材质和孔位后再固定。",
                    "针线包可以把木扣缝牢。",
                    "把针线包拖到缺扣衣服。"
                ]
            }
        ],
        "ending": "裁缝替猫助手补好了小披风，纽扣再也不会轻易掉了。",
        "mechanism": "材料分离与纽扣修补",
        "legacyInspiration": "旧第21关：用工具反应区分混在一起的对象",
        "timeLimitSeconds": 250,
        "sceneCaption": "裁缝要找一枚木纽扣。"
    }),
    make({
        "id": 71,
        "title": "一路平安的瓷碗",
        "category": "组合",
        "background": "market",
        "story": "一只瓷碗要寄给猫奶奶。包装说明要求缓冲碗身并填满外箱空隙，不能只把盖子封上。",
        "goal": "完成不会晃动的防震包装",
        "objects": [
            {
                "id": "guide",
                "label": "易碎包装卡",
                "kind": "letter",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "包装卡：保护碗身、装箱、填空隙，确认不晃动后封箱。",
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "bowl",
                "label": "待寄瓷碗",
                "kind": "bowl",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "wrap"
                ],
                "visibleWhen": []
            },
            {
                "id": "foam",
                "label": "软缓冲套",
                "kind": "paper",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "wrap"
                ],
                "visibleWhen": []
            },
            {
                "id": "wrapped",
                "label": "套好的瓷碗",
                "kind": "bowl",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "wrap"
                ],
                "hiddenWhen": [
                    "pack"
                ]
            },
            {
                "id": "box",
                "label": "邮寄纸箱",
                "kind": "box",
                "x": 0.8,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "paper",
                "label": "填隙纸团",
                "kind": "paper",
                "x": 0.5,
                "y": 0.78,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "fill"
                ],
                "visibleWhen": []
            },
            {
                "id": "tape",
                "label": "封箱胶带",
                "kind": "rope",
                "x": 0.8,
                "y": 0.78,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "seal"
                ],
                "visibleWhen": []
            },
            {
                "id": "parcel",
                "label": "稳固包裹",
                "kind": "box",
                "x": 0.5,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "seal"
                ],
                "hiddenWhen": []
            }
        ],
        "steps": [
            {
                "id": "wrap",
                "source": "foam",
                "action": "drag",
                "target": "bowl",
                "requires": [],
                "feedback": "软套包住碗口和碗底，瓷器不会直接碰到纸箱。",
                "hints": [
                    "先保护最脆弱的碗口。",
                    "软缓冲套应直接包在碗外。",
                    "把软缓冲套拖到待寄瓷碗。"
                ]
            },
            {
                "id": "pack",
                "source": "wrapped",
                "action": "drag",
                "target": "box",
                "requires": [
                    "wrap"
                ],
                "feedback": "套好的碗放进纸箱，四周还留有空隙。",
                "hints": [
                    "把已保护好的瓷器装入外箱。",
                    "不能把裸碗直接装箱。",
                    "把套好的瓷碗拖到邮寄纸箱。"
                ]
            },
            {
                "id": "fill",
                "source": "paper",
                "action": "drag",
                "target": "box",
                "requires": [
                    "pack"
                ],
                "feedback": "纸团填满四周空隙，轻晃时碗不再移动。",
                "hints": [
                    "外箱内不能留下晃动空间。",
                    "纸团用于填空隙。",
                    "把填隙纸团拖到邮寄纸箱。"
                ]
            },
            {
                "id": "seal",
                "source": "tape",
                "action": "drag",
                "target": "box",
                "requires": [
                    "fill"
                ],
                "feedback": "纸箱封好并标记易碎，防震包装完成。",
                "hints": [
                    "确认不晃动后再封箱。",
                    "最后使用封箱胶带。",
                    "把封箱胶带拖到邮寄纸箱。"
                ]
            },
            {
                "id": "press-seal",
                "source": "parcel",
                "action": "hold",
                "requires": [
                    "seal"
                ],
                "feedback": "胶带被压实，缓冲材料固定住瓷碗，包裹不会在路上散开。",
                "hints": [
                    "胶带搭上了，还没有贴牢。",
                    "压实封口两端。",
                    "按住封好的包裹约一秒。"
                ],
                "durationMs": 1000
            }
        ],
        "ending": "几天后，猫奶奶寄来照片：瓷碗完好，小猫正用它喝水。",
        "mechanism": "包裹接触面与防震固定",
        "legacyInspiration": "旧第2/55关：按物件状态逐步准备运输条件",
        "timeLimitSeconds": 250,
        "sceneCaption": "一只瓷碗要寄给猫奶奶。"
    }),
    make({
        "id": 72,
        "title": "猫车绕远路",
        "category": "路径",
        "background": "train",
        "story": "小货车总会驶进维修支线。线路图上有外环，维修标志必须先保护住危险入口。",
        "goal": "关闭维修支线，让猫车走安全外环",
        "objects": [
            {
                "id": "map",
                "label": "外环线路图",
                "kind": "map",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "damage",
                "label": "断轨标记",
                "kind": "gap",
                "x": 0.8,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "description": "内侧轨道缺了一段，不能放车进入。"
            },
            {
                "id": "flag",
                "label": "停行红旗",
                "kind": "paper",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "block"
                ]
            },
            {
                "id": "entry",
                "label": "支线入口",
                "kind": "door",
                "x": 0.8,
                "y": 0.55,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "switch",
                "label": "岔道开关",
                "kind": "switch",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "cart",
                "label": "待发猫车",
                "kind": "box",
                "x": 0.5,
                "y": 0.8,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "depart"
                ]
            },
            {
                "id": "safe",
                "label": "外环终点",
                "kind": "door",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "arrived",
                "label": "到站猫车",
                "kind": "box",
                "x": 0.5,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "depart"
                ]
            }
        ],
        "steps": [
            {
                "id": "map",
                "source": "map",
                "action": "tap",
                "requires": [],
                "feedback": "外环连通起点和终点；内侧支线正在维修。",
                "hints": [
                    "先找不经过维修点的路线。",
                    "线路图显示外环能绕过支线。",
                    "点击外环线路图。"
                ]
            },
            {
                "id": "inspect",
                "source": "damage",
                "action": "hold",
                "requires": [],
                "feedback": "断轨位置与维修标记一致，必须阻止误入。",
                "hints": [
                    "桥板上有一道不明显裂口。",
                    "停留观察承重部分。",
                    "按住受损桥板约一秒。"
                ],
                "durationMs": 900
            },
            {
                "id": "block",
                "source": "flag",
                "action": "drag",
                "target": "entry",
                "requires": [
                    "inspect"
                ],
                "feedback": "红旗封住维修入口，后来的车辆也不会误入。",
                "hints": [
                    "先明确标出禁止进入的地方。",
                    "红旗应该放在支线入口。",
                    "把停行红旗拖到支线入口。"
                ]
            },
            {
                "id": "route",
                "source": "switch",
                "action": "swipe",
                "requires": [
                    "map",
                    "block"
                ],
                "feedback": "岔道转向外环，路线上不再经过维修口。",
                "hints": [
                    "直线路段已经封闭。",
                    "把岔道拨向左侧安全绕行线。",
                    "向左滑动路线开关。"
                ],
                "direction": "left"
            },
            {
                "id": "depart",
                "source": "cart",
                "action": "drag",
                "target": "safe",
                "requires": [
                    "route"
                ],
                "feedback": "猫车沿外环安全到站，虽然绕路却避开了断轨。",
                "hints": [
                    "正确路线已经连通。",
                    "让猫车前往外环终点。",
                    "把待发猫车拖到外环终点。"
                ]
            }
        ],
        "ending": "送来的材料正好用于修轨，维修完成前红旗会一直保留。",
        "mechanism": "风险隔离与安全绕行",
        "legacyInspiration": "旧第17/18关：先阻止进入危险线，再让角色通过替代路线",
        "timeLimitSeconds": 250,
        "sceneCaption": "小货车总会驶进维修支线。"
    }),
    make({
        "id": 73,
        "title": "不能拆的礼物",
        "category": "证据",
        "background": "office",
        "story": "三份礼物标签混了。给小猫的礼物应是轻巧、会轻响、系黄绳的玩具盒，不必拆封。",
        "goal": "从外部证据识别玩具礼盒",
        "objects": [
            {
                "id": "order",
                "label": "礼物清单",
                "kind": "letter",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "weigh",
                "label": "称重记录",
                "kind": "paper",
                "x": 0.5,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "sound",
                "label": "轻响记录",
                "kind": "paper",
                "x": 0.8,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "red",
                "label": "红绳重盒",
                "kind": "box",
                "x": 0.2,
                "y": 0.55,
                "w": 0.15,
                "h": 0.15,
                "description": "红绳盒重500克，内部没有轻响。"
            },
            {
                "id": "yellow",
                "label": "黄绳轻盒",
                "kind": "box",
                "x": 0.5,
                "y": 0.55,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "choose"
                ],
                "description": "黄绳盒重100克，轻晃时有清脆小响。"
            },
            {
                "id": "blue",
                "label": "蓝绳轻盒",
                "kind": "box",
                "x": 0.8,
                "y": 0.55,
                "w": 0.15,
                "h": 0.15,
                "description": "蓝绳盒也是100克，但里面安静，绳色也不符合。"
            },
            {
                "id": "delivery",
                "label": "小猫礼物格",
                "kind": "tray",
                "x": 0.5,
                "y": 0.8,
                "w": 0.15,
                "h": 0.15
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "order",
                "action": "tap",
                "requires": [],
                "feedback": "清单注明：100克、内有小铃、黄绳包装；三项条件缺一不可。",
                "hints": [
                    "先知道要找什么。",
                    "清单同时写了重量、声响和包装。",
                    "点击礼物清单。"
                ]
            },
            {
                "id": "weight",
                "source": "red",
                "action": "drag",
                "requires": [],
                "feedback": "红盒放上秤，重量超出订单范围，可以排除。",
                "hints": [
                    "先用秤检验候选盒。",
                    "红盒的重量与订单不符。",
                    "把红盒拖到称重台。"
                ],
                "target": "weigh"
            },
            {
                "id": "weight-yellow",
                "source": "yellow",
                "action": "drag",
                "target": "weigh",
                "requires": [
                    "read"
                ],
                "feedback": "黄盒的重量符合订单，先保留这个候选。",
                "hints": [
                    "还需要测其他盒子。",
                    "合适的重量只是一个条件。",
                    "把黄盒拖到称重台。"
                ]
            },
            {
                "id": "weight-blue",
                "source": "blue",
                "action": "drag",
                "target": "weigh",
                "requires": [
                    "read"
                ],
                "feedback": "蓝盒太轻，重量条件不符合。",
                "hints": [
                    "最后还剩一个候选。",
                    "蓝盒明显轻于订单要求。",
                    "把蓝盒拖到称重台。"
                ]
            },
            {
                "id": "sound",
                "source": "sound",
                "action": "hold",
                "requires": [
                    "weight-yellow",
                    "weight-blue"
                ],
                "feedback": "只有黄绳盒有清脆小响，蓝绳盒内没有铃声；波纹记录可直接看。",
                "hints": [
                    "正确礼物还需要符合声音条件。",
                    "轻轻靠近听，不要拆开。",
                    "按住声音检查位置约一秒。"
                ],
                "durationMs": 1000
            },
            {
                "id": "choose",
                "source": "yellow",
                "action": "drag",
                "target": "delivery",
                "requires": [
                    "read",
                    "weight",
                    "sound"
                ],
                "feedback": "黄绳轻盒同时满足重量、声响与包装条件，礼物格填好了。",
                "hints": [
                    "让三项条件指向同一份礼物。",
                    "轻、会响、黄绳的是同一盒。",
                    "把黄绳轻盒拖到小猫礼物格。"
                ]
            }
        ],
        "ending": "小猫拆开后得到会叮当响的小球，其他礼物也保持完好。",
        "mechanism": "不拆封的多次实验",
        "legacyInspiration": "旧第4/21关：同一检测工具逐个作用于不同候选对象",
        "timeLimitSeconds": 270,
        "sceneCaption": "三份礼物标签混了。"
    }),
    make({
        "id": 74,
        "title": "歪的是哪条线",
        "category": "参照",
        "background": "gallery",
        "story": "新挂的画看起来很正，门框却也有点斜。修复师留下了一根带重锤的垂线。",
        "goal": "用独立垂直参照挂正画框",
        "objects": [
            {
                "id": "rule",
                "label": "挂画说明",
                "kind": "letter",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "door",
                "label": "倾斜门框",
                "kind": "door",
                "x": 0.8,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "description": "老门框本身不竖直，不能拿它当标准。"
            },
            {
                "id": "plumb",
                "label": "重锤垂线",
                "kind": "rope",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "measure"
                ]
            },
            {
                "id": "frame",
                "label": "待校正画框",
                "kind": "frame",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "measure"
                ]
            },
            {
                "id": "measured",
                "label": "带垂线画框",
                "kind": "frame",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "measure"
                ],
                "hiddenWhen": [
                    "turn"
                ]
            },
            {
                "id": "straight",
                "label": "竖直画框",
                "kind": "frame",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "turn"
                ]
            },
            {
                "id": "clip",
                "label": "挂钩锁扣",
                "kind": "hook",
                "x": 0.8,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "lock"
                ]
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "rule",
                "action": "tap",
                "requires": [],
                "feedback": "说明：重锤自然下垂给出竖直方向，旧门框不一定可靠。",
                "hints": [
                    "找一个独立于房间装饰的参照。",
                    "重物自然下垂能确定竖直。",
                    "点击挂画说明。"
                ]
            },
            {
                "id": "measure",
                "source": "plumb",
                "action": "drag",
                "target": "frame",
                "requires": [
                    "read"
                ],
                "feedback": "垂线垂直向下，画框边缘与它不平行，门框也有倾斜。",
                "hints": [
                    "把可靠参照放到待测物旁。",
                    "将垂线挂在画框边。",
                    "把重锤垂线拖到待校正画框。"
                ]
            },
            {
                "id": "plumb-steady",
                "source": "measured",
                "action": "hold",
                "requires": [
                    "measure"
                ],
                "feedback": "垂线停止摆动，真正的竖直方向固定下来。",
                "hints": [
                    "刚挂下的垂线还在晃。",
                    "先让它稳定，再决定画框方向。",
                    "按住挂有垂线的画框约一秒。"
                ],
                "durationMs": 1000
            },
            {
                "id": "turn",
                "source": "measured",
                "action": "swipe",
                "requires": [
                    "measure",
                    "plumb-steady"
                ],
                "feedback": "轻转画框，让两侧边缘与垂线平行，挂画真正竖直了。",
                "hints": [
                    "垂线已经给出真实竖直。",
                    "把画框向左微调到与垂线平行。",
                    "向左滑动带垂线的画框。"
                ],
                "direction": "left"
            },
            {
                "id": "lock",
                "source": "clip",
                "action": "drag",
                "target": "straight",
                "requires": [
                    "turn"
                ],
                "feedback": "锁扣固定校正角度，画框不会再次滑歪。",
                "hints": [
                    "测量正确后要保持位置。",
                    "用锁扣固定挂钩。",
                    "把挂钩锁扣拖到竖直画框。"
                ]
            }
        ],
        "ending": "歪门框不再误导挂画，观众终于能看到端正的展览。",
        "mechanism": "铅垂参照与视觉错觉",
        "legacyInspiration": "旧第11/28关：用可靠参照纠正看似相同的倾斜",
        "timeLimitSeconds": 250,
        "sceneCaption": "新挂的画看起来很正，门框却也有点斜。"
    }),
    make({
        "id": 75,
        "title": "只进不出的猫门",
        "category": "机关",
        "background": "alley",
        "story": "猫门只能往里推，向外却被一枚运输限位块卡住。旁边安全说明要求先固定门片再拆限位。",
        "goal": "安全解除运输限位，恢复双向猫门",
        "objects": [
            {
                "id": "guide",
                "label": "门片说明",
                "kind": "letter",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "door",
                "label": "单向猫门",
                "kind": "door",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "test"
                ],
                "description": "外侧限位块挡住了门片；拆卸前要托住门片。"
            },
            {
                "id": "wedge",
                "label": "软支撑块",
                "kind": "stone",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "support"
                ]
            },
            {
                "id": "stop",
                "label": "运输限位块",
                "kind": "box",
                "x": 0.8,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "remove"
                ]
            },
            {
                "id": "tool",
                "label": "旋紧小柄",
                "kind": "rod",
                "x": 0.8,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "remove"
                ]
            },
            {
                "id": "release",
                "label": "取出支撑",
                "kind": "button",
                "x": 0.5,
                "y": 0.78,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "remove"
                ],
                "hiddenWhen": [
                    "release"
                ]
            },
            {
                "id": "free",
                "label": "双向猫门",
                "kind": "door",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "test"
                ]
            },
            {
                "id": "kitten",
                "label": "试门的小猫",
                "kind": "cat",
                "x": 0.2,
                "y": 0.82,
                "w": 0.23,
                "h": 0.24,
                "visibleWhen": [
                    "test"
                ],
                "hiddenWhen": [
                    "pass"
                ],
                "art": "cat-gray"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "guide",
                "action": "tap",
                "requires": [],
                "feedback": "说明：软块托住门片，旋下运输限位，撤掉支撑后测试双向推开。",
                "hints": [
                    "检查这扇门是否仍在运输状态。",
                    "说明写着先托门，再拆限位。",
                    "点击门片说明。"
                ]
            },
            {
                "id": "support",
                "source": "wedge",
                "action": "drag",
                "target": "door",
                "requires": [
                    "read"
                ],
                "feedback": "软块托住门片，拆限位时门片不会突然下落。",
                "hints": [
                    "先稳住会活动的门片。",
                    "用软支撑块托住下缘。",
                    "把软支撑块拖到单向猫门。"
                ]
            },
            {
                "id": "remove",
                "source": "tool",
                "action": "drag",
                "target": "stop",
                "requires": [
                    "support"
                ],
                "feedback": "运输限位旋下，向外转动的空间恢复了。",
                "hints": [
                    "真正阻挡转动的是哪个部件？",
                    "外侧运输限位需要旋下。",
                    "把旋紧小柄拖到运输限位块。"
                ]
            },
            {
                "id": "release",
                "source": "release",
                "action": "swipe",
                "requires": [
                    "remove"
                ],
                "feedback": "轻轻取出支撑，门片自由垂下。",
                "hints": [
                    "限位已拆掉，支撑楔可以移走。",
                    "把支撑件向下抽出。",
                    "向下滑动释放位置。"
                ],
                "direction": "down"
            },
            {
                "id": "test",
                "source": "door",
                "action": "tap",
                "requires": [
                    "release"
                ],
                "feedback": "分别向内外轻推，门片都能通过，双向功能恢复。",
                "hints": [
                    "用双向测试确认维修结果。",
                    "猫门应能向内也能向外推。",
                    "点击单向猫门执行双向测试。"
                ]
            },
            {
                "id": "pass",
                "source": "kitten",
                "action": "drag",
                "target": "free",
                "requires": [
                    "test"
                ],
                "feedback": "小猫从门洞顺利走到另一边，双向通行真的恢复了。",
                "hints": [
                    "门能摆动还不等于小猫能通过。",
                    "最后让小猫试着走过去。",
                    "把小猫拖到打开的猫门。"
                ]
            }
        ],
        "ending": "猫咪们自由进出，软支撑和小柄被收进了维护工具箱。",
        "mechanism": "运输限位与双向通行",
        "legacyInspiration": "旧第30/53关：先解除机械限制，再验证角色真正能通过",
        "timeLimitSeconds": 270,
        "sceneCaption": "猫门只能往里推，向外却被一枚运输限位块卡住。"
    }),
    make({
        "id": 76,
        "title": "两张相同的收据",
        "category": "推理",
        "background": "market",
        "story": "两张收据写着完全相同的内容。店家要把原件交给客人、复写联留档，不能只按文字区分。",
        "goal": "识别复写联，正确分发收据",
        "objects": [
            {
                "id": "rule",
                "label": "收据说明",
                "kind": "letter",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "sheet",
                "label": "叠好的收据",
                "kind": "paper",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "lift"
                ]
            },
            {
                "id": "corner",
                "label": "夹层纸角",
                "kind": "paper",
                "x": 0.8,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "lift"
                ]
            },
            {
                "id": "original",
                "label": "墨迹原件",
                "kind": "letter",
                "x": 0.2,
                "y": 0.55,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "lift"
                ],
                "hiddenWhen": [
                    "give"
                ]
            },
            {
                "id": "copy",
                "label": "压痕复写联",
                "kind": "letter",
                "x": 0.8,
                "y": 0.55,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "lift"
                ],
                "hiddenWhen": [
                    "file"
                ]
            },
            {
                "id": "archive",
                "label": "店家档案格",
                "kind": "box",
                "x": 0.2,
                "y": 0.8,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "guest",
                "label": "客人文件夹",
                "kind": "box",
                "x": 0.8,
                "y": 0.8,
                "w": 0.15,
                "h": 0.15
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "rule",
                "action": "tap",
                "requires": [],
                "feedback": "原件有笔尖墨迹，复写联有均匀压痕；原件交客人，复写联留店。",
                "hints": [
                    "文字相同，也可能有不同来源。",
                    "说明要求看墨迹和压痕。",
                    "点击收据说明。"
                ]
            },
            {
                "id": "inspect",
                "source": "sheet",
                "action": "hold",
                "requires": [],
                "feedback": "收据之间夹着一张复写纸，下面的字由压力转印而成。",
                "hints": [
                    "同样的字迹可能来自不同层。",
                    "留意纸面压力和背面颜色。",
                    "按住收据纸面约一秒。"
                ],
                "durationMs": 900
            },
            {
                "id": "lift",
                "source": "corner",
                "action": "swipe",
                "requires": [
                    "inspect"
                ],
                "feedback": "揭开夹层后，上联有笔尖墨迹，下联留下均匀压痕。",
                "hints": [
                    "角落露出第二层纸。",
                    "轻轻把上层纸角掀起。",
                    "向上滑动收据纸角。"
                ],
                "direction": "up"
            },
            {
                "id": "file",
                "source": "copy",
                "action": "drag",
                "target": "archive",
                "requires": [
                    "read",
                    "lift"
                ],
                "feedback": "压痕复写联收入店家档案格。",
                "hints": [
                    "哪一联应该留店？",
                    "复写联用于店家留档。",
                    "把压痕复写联拖到店家档案格。"
                ]
            },
            {
                "id": "give",
                "source": "original",
                "action": "drag",
                "target": "guest",
                "requires": [
                    "read",
                    "lift"
                ],
                "feedback": "有笔尖墨迹的原件放入客人文件夹，收据分发正确。",
                "hints": [
                    "客人需要哪一份？",
                    "原件上有实际笔尖留下的墨迹。",
                    "把墨迹原件拖到客人文件夹。"
                ]
            }
        ],
        "ending": "店家和客人都拿到了正确的一联，重复文字不再造成误会。",
        "mechanism": "复写层次与双份归属",
        "legacyInspiration": "旧第8关：利用纸面留下的痕迹区分相似物",
        "timeLimitSeconds": 250,
        "sceneCaption": "两张收据写着完全相同的内容。"
    }),
    make({
        "id": 77,
        "title": "窄河上的三件行李",
        "category": "运输",
        "background": "harbor",
        "mechanism": "单舱渡船与分段运输",
        "legacyInspiration": "旧第55关：有限载具反复接驳，每次只搬运合适目标",
        "sceneCaption": "小船只有一个货位，先送小猫进安全窝，再分次运花和鱼。",
        "story": "码头的小船一次只能装一件行李。小猫到了对岸要先住进猫窝，花盆和鱼餐才能安全分批送到不同地方。",
        "goal": "用单货位小船分三次送达小猫、花盆和鱼餐",
        "timeLimitSeconds": 360,
        "objects": [
            {
                "id": "kitten",
                "label": "岸边小猫",
                "kind": "cat",
                "x": 0.17,
                "y": 0.3,
                "w": 0.22,
                "h": 0.25,
                "hiddenWhen": [
                    "load-cat"
                ],
                "art": "cat-kitten"
            },
            {
                "id": "plant",
                "label": "待运花盆",
                "kind": "plant",
                "x": 0.17,
                "y": 0.55,
                "w": 0.2,
                "h": 0.24,
                "visibleWhen": [
                    "return-a"
                ],
                "hiddenWhen": [
                    "load-plant"
                ],
                "art": "plant-bloom"
            },
            {
                "id": "fish",
                "label": "待运鱼餐",
                "kind": "fish",
                "x": 0.17,
                "y": 0.8,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "return-b"
                ],
                "hiddenWhen": [
                    "load-fish"
                ],
                "art": "fish"
            },
            {
                "id": "west",
                "label": "西岸码头",
                "kind": "stand",
                "x": 0.36,
                "y": 0.83,
                "w": 0.2,
                "h": 0.15,
                "art": "stand"
            },
            {
                "id": "east",
                "label": "东岸码头",
                "kind": "stand",
                "x": 0.82,
                "y": 0.2,
                "w": 0.24,
                "h": 0.17,
                "art": "stand"
            },
            {
                "id": "boat-a",
                "label": "空货位小船",
                "kind": "box",
                "x": 0.47,
                "y": 0.52,
                "w": 0.3,
                "h": 0.21,
                "hiddenWhen": [
                    "cross-cat"
                ],
                "art": "boat"
            },
            {
                "id": "cat-cargo",
                "label": "到岸小猫",
                "kind": "cat",
                "x": 0.8,
                "y": 0.42,
                "w": 0.22,
                "h": 0.24,
                "visibleWhen": [
                    "cross-cat"
                ],
                "hiddenWhen": [
                    "settle"
                ],
                "art": "cat-kitten"
            },
            {
                "id": "bed",
                "label": "对岸安全猫窝",
                "kind": "bed",
                "x": 0.82,
                "y": 0.71,
                "w": 0.25,
                "h": 0.23,
                "art": "bed-fixed"
            },
            {
                "id": "boat-east-a",
                "label": "第一趟空船",
                "kind": "box",
                "x": 0.56,
                "y": 0.42,
                "w": 0.26,
                "h": 0.19,
                "visibleWhen": [
                    "cross-cat"
                ],
                "hiddenWhen": [
                    "return-a"
                ],
                "art": "boat"
            },
            {
                "id": "boat-b",
                "label": "回来的小船",
                "kind": "box",
                "x": 0.47,
                "y": 0.52,
                "w": 0.3,
                "h": 0.21,
                "visibleWhen": [
                    "return-a"
                ],
                "hiddenWhen": [
                    "cross-plant"
                ],
                "art": "boat"
            },
            {
                "id": "plant-cargo",
                "label": "到岸花盆",
                "kind": "plant",
                "x": 0.81,
                "y": 0.42,
                "w": 0.22,
                "h": 0.24,
                "visibleWhen": [
                    "cross-plant"
                ],
                "hiddenWhen": [
                    "garden"
                ],
                "art": "plant-bloom"
            },
            {
                "id": "garden",
                "label": "花园接收台",
                "kind": "stand",
                "x": 0.8,
                "y": 0.89,
                "w": 0.22,
                "h": 0.14,
                "visibleWhen": [
                    "cross-plant"
                ],
                "art": "stand"
            },
            {
                "id": "boat-east-b",
                "label": "第二趟空船",
                "kind": "box",
                "x": 0.56,
                "y": 0.42,
                "w": 0.26,
                "h": 0.19,
                "visibleWhen": [
                    "cross-plant"
                ],
                "hiddenWhen": [
                    "return-b"
                ],
                "art": "boat"
            },
            {
                "id": "boat-c",
                "label": "最后一趟小船",
                "kind": "box",
                "x": 0.47,
                "y": 0.52,
                "w": 0.3,
                "h": 0.21,
                "visibleWhen": [
                    "return-b"
                ],
                "hiddenWhen": [
                    "cross-fish"
                ],
                "art": "boat"
            },
            {
                "id": "fish-cargo",
                "label": "到岸鱼餐",
                "kind": "fish",
                "x": 0.8,
                "y": 0.42,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "cross-fish"
                ],
                "hiddenWhen": [
                    "kitchen"
                ],
                "art": "fish"
            },
            {
                "id": "kitchen",
                "label": "厨房接收台",
                "kind": "stand",
                "x": 0.8,
                "y": 0.89,
                "w": 0.22,
                "h": 0.14,
                "visibleWhen": [
                    "cross-fish"
                ],
                "art": "stand"
            }
        ],
        "steps": [
            {
                "id": "load-cat",
                "source": "kitten",
                "action": "drag",
                "target": "boat-a",
                "requires": [],
                "feedback": "小猫先坐进唯一的货位，其他东西暂时留在岸上。",
                "hints": [
                    "小船一次只有一个位置。",
                    "先送需要照顾的小猫。",
                    "把岸边小猫拖到空货位小船。"
                ]
            },
            {
                "id": "cross-cat",
                "source": "boat-a",
                "action": "drag",
                "target": "east",
                "requires": [
                    "load-cat"
                ],
                "feedback": "第一趟抵达东岸，小猫等待下船。",
                "hints": [
                    "小猫已坐稳。",
                    "把船移到东岸码头。",
                    "把载猫小船拖到东岸码头。"
                ]
            },
            {
                "id": "settle",
                "source": "cat-cargo",
                "action": "drag",
                "target": "bed",
                "requires": [
                    "cross-cat"
                ],
                "feedback": "小猫进入安全猫窝，不会在码头追逐后来的鱼餐。",
                "hints": [
                    "先把小猫安置妥当。",
                    "安全猫窝在东岸。",
                    "把到岸小猫拖到对岸猫窝。"
                ]
            },
            {
                "id": "return-a",
                "source": "boat-east-a",
                "action": "drag",
                "target": "west",
                "requires": [
                    "settle"
                ],
                "feedback": "空船返回西岸，可以装第二件货。",
                "hints": [
                    "船空出来后才能接下一件。",
                    "先把空船送回西岸。",
                    "把第一趟空船拖到西岸码头。"
                ]
            },
            {
                "id": "load-plant",
                "source": "plant",
                "action": "drag",
                "target": "boat-b",
                "requires": [
                    "return-a"
                ],
                "feedback": "花盆平稳放进第二趟货位。",
                "hints": [
                    "这次只装一件。",
                    "把花盆放稳，不与鱼餐叠放。",
                    "把待运花盆拖到回来的小船。"
                ]
            },
            {
                "id": "cross-plant",
                "source": "boat-b",
                "action": "drag",
                "target": "east",
                "requires": [
                    "load-plant"
                ],
                "feedback": "花盆抵达东岸。",
                "hints": [
                    "花盆已固定。",
                    "按同一路线到东岸。",
                    "把载花小船拖到东岸码头。"
                ]
            },
            {
                "id": "garden",
                "source": "plant-cargo",
                "action": "drag",
                "target": "garden",
                "requires": [
                    "cross-plant"
                ],
                "feedback": "花盆交给花园接收台，小船再次空出来。",
                "hints": [
                    "花盆不应放进猫窝。",
                    "它的目的地是花园。",
                    "把到岸花盆拖到花园接收台。"
                ]
            },
            {
                "id": "return-b",
                "source": "boat-east-b",
                "action": "drag",
                "target": "west",
                "requires": [
                    "garden"
                ],
                "feedback": "空船第二次回到西岸。",
                "hints": [
                    "最后还剩鱼餐。",
                    "让空船返回接货。",
                    "把第二趟空船拖到西岸码头。"
                ]
            },
            {
                "id": "load-fish",
                "source": "fish",
                "action": "drag",
                "target": "boat-c",
                "requires": [
                    "return-b"
                ],
                "feedback": "鱼餐进入最后一趟货位。",
                "hints": [
                    "鱼餐现在可以单独运输。",
                    "只有一件货，不要超载。",
                    "把待运鱼餐拖到最后一趟小船。"
                ]
            },
            {
                "id": "cross-fish",
                "source": "boat-c",
                "action": "drag",
                "target": "east",
                "requires": [
                    "load-fish"
                ],
                "feedback": "鱼餐安全抵达东岸。",
                "hints": [
                    "最后一件已经装好。",
                    "沿同一路线送到东岸。",
                    "把载鱼小船拖到东岸码头。"
                ]
            },
            {
                "id": "kitchen",
                "source": "fish-cargo",
                "action": "drag",
                "target": "kitchen",
                "requires": [
                    "cross-fish"
                ],
                "feedback": "鱼餐交进厨房，三件行李都到达正确位置。",
                "hints": [
                    "小猫已在窝里，鱼餐要交给厨房。",
                    "选择厨房接收台。",
                    "把到岸鱼餐拖到厨房接收台。"
                ]
            }
        ],
        "ending": "小船没有一次超载，小猫、花盆和鱼餐各到其所。"
    }),
    make({
        "id": 78,
        "title": "空位留下的轮廓",
        "category": "观察",
        "background": "gallery",
        "story": "墙上少了一件展品，登记本只写“窄框长叶”。三个备用画框看起来都差不多。",
        "goal": "用空位轮廓与登记信息找回展品",
        "objects": [
            {
                "id": "register",
                "label": "展品登记",
                "kind": "letter",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "outline",
                "label": "墙上浅轮廓",
                "kind": "frame",
                "x": 0.5,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "paper",
                "label": "描摹薄纸",
                "kind": "paper",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "trace"
                ]
            },
            {
                "id": "trace",
                "label": "描好的轮廓",
                "kind": "paper",
                "x": 0.5,
                "y": 0.55,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "trace"
                ],
                "hiddenWhen": [
                    "compare"
                ]
            },
            {
                "id": "wide",
                "label": "宽框长叶画",
                "kind": "painting",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "description": "叶片对得上，但宽框比墙上轮廓更宽。"
            },
            {
                "id": "right",
                "label": "窄框长叶画",
                "kind": "painting",
                "x": 0.8,
                "y": 0.55,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "hang"
                ]
            },
            {
                "id": "round",
                "label": "圆框短叶画",
                "kind": "painting",
                "x": 0.8,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "画框轮廓和叶片长度都不符。"
            },
            {
                "id": "restored",
                "label": "归位的叶画",
                "kind": "painting",
                "x": 0.5,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "hang"
                ]
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "register",
                "action": "tap",
                "requires": [],
                "feedback": "登记本要求窄长矩形画框，画中为长叶；内容与外形需同时吻合。",
                "hints": [
                    "先了解缺失展品的两个特征。",
                    "登记本同时描述画框与内容。",
                    "点击展品登记。"
                ]
            },
            {
                "id": "trace",
                "source": "paper",
                "action": "drag",
                "target": "outline",
                "requires": [
                    "read"
                ],
                "feedback": "薄纸描出墙上窄长矩形的浅轮廓。",
                "hints": [
                    "空位也保留了形状证据。",
                    "把轮廓复制下来方便比较。",
                    "把描摹薄纸拖到墙上浅轮廓。"
                ]
            },
            {
                "id": "rub-trace",
                "source": "trace",
                "action": "scrub",
                "requires": [
                    "trace"
                ],
                "feedback": "沿边缘轻轻拓出轮廓，空位的窄肩与长身清楚可见。",
                "hints": [
                    "纸贴上去还没留下完整轮廓。",
                    "来回摩擦边缘，显出凹痕。",
                    "在拓印纸上来回擦拭。"
                ],
                "minDistance": 0.5
            },
            {
                "id": "compare",
                "source": "trace",
                "action": "drag",
                "target": "right",
                "requires": [
                    "trace",
                    "rub-trace"
                ],
                "feedback": "描摹轮廓与窄框长叶画完全重合，另外两幅各有矛盾。",
                "hints": [
                    "把外形证据与登记内容一起核对。",
                    "窄框长叶同时符合两个条件。",
                    "把描好的轮廓拖到窄框长叶画。"
                ]
            },
            {
                "id": "hang",
                "source": "right",
                "action": "drag",
                "target": "outline",
                "requires": [
                    "compare"
                ],
                "feedback": "画框挂回原位，浅轮廓被恰好覆盖，展品归位。",
                "hints": [
                    "将确认的展品放回证据对应的位置。",
                    "墙上浅轮廓就是原来的挂画处。",
                    "把窄框长叶画拖到墙上浅轮廓。"
                ]
            }
        ],
        "ending": "修复师在登记本上补上照片，下次整理展品会更方便。",
        "mechanism": "负形拓印与轮廓归位",
        "legacyInspiration": "旧第4/26关：空白位置本身也保留目标形状",
        "timeLimitSeconds": 250,
        "sceneCaption": "墙上少了一件展品，登记本只写“窄框长叶”。"
    }),
    make({
        "id": 79,
        "title": "大雨前的仓库",
        "category": "综合",
        "background": "harbor",
        "mechanism": "防汛、物资与多角色撤离",
        "legacyInspiration": "旧第43/45关：先巩固安全环境，再搭通路依次救援",
        "sceneCaption": "仓库即将进水，两只小猫与一箱食物需要分阶段转移。",
        "story": "大雨马上到码头。先堵住进水口、压牢挡板，再把食物抬高。通道搭好后，让两只小猫依次上救援船。",
        "goal": "防住进水并将两只小猫安全转移",
        "timeLimitSeconds": 360,
        "objects": [
            {
                "id": "inlet",
                "label": "进水口",
                "kind": "gap",
                "x": 0.18,
                "y": 0.28,
                "w": 0.23,
                "h": 0.2,
                "hiddenWhen": [
                    "block"
                ],
                "art": "pipe"
            },
            {
                "id": "barrier",
                "label": "挡水木板",
                "kind": "paper",
                "x": 0.17,
                "y": 0.8,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "block"
                ],
                "art": "plank"
            },
            {
                "id": "barrier-set",
                "label": "立好的挡水板",
                "kind": "paper",
                "x": 0.18,
                "y": 0.28,
                "w": 0.24,
                "h": 0.2,
                "visibleWhen": [
                    "block"
                ],
                "art": "plank"
            },
            {
                "id": "sandbag",
                "label": "压板沙袋",
                "kind": "box",
                "x": 0.4,
                "y": 0.81,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "weight"
                ],
                "art": "sandbag"
            },
            {
                "id": "food",
                "label": "猫粮箱",
                "kind": "box",
                "x": 0.5,
                "y": 0.56,
                "w": 0.24,
                "h": 0.23,
                "hiddenWhen": [
                    "food"
                ],
                "art": "food-bag"
            },
            {
                "id": "shelf",
                "label": "高处储物架",
                "kind": "stand",
                "x": 0.77,
                "y": 0.25,
                "w": 0.28,
                "h": 0.23,
                "art": "bookshelf"
            },
            {
                "id": "plank",
                "label": "撤离踏板",
                "kind": "paper",
                "x": 0.64,
                "y": 0.82,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "bridge"
                ],
                "art": "plank"
            },
            {
                "id": "gap",
                "label": "通船空隙",
                "kind": "gap",
                "x": 0.78,
                "y": 0.59,
                "w": 0.24,
                "h": 0.18,
                "hiddenWhen": [
                    "bridge"
                ],
                "art": "stand"
            },
            {
                "id": "bridge",
                "label": "搭好的踏板",
                "kind": "paper",
                "x": 0.78,
                "y": 0.59,
                "w": 0.28,
                "h": 0.17,
                "visibleWhen": [
                    "bridge"
                ],
                "art": "fixed-plank"
            },
            {
                "id": "boat",
                "label": "救援小船",
                "kind": "box",
                "x": 0.78,
                "y": 0.82,
                "w": 0.26,
                "h": 0.19,
                "art": "boat"
            },
            {
                "id": "orange",
                "label": "橘色小猫",
                "kind": "cat",
                "x": 0.21,
                "y": 0.52,
                "w": 0.22,
                "h": 0.25,
                "hiddenWhen": [
                    "orange"
                ],
                "art": "cat-orange"
            },
            {
                "id": "gray",
                "label": "灰色小猫",
                "kind": "cat",
                "x": 0.5,
                "y": 0.29,
                "w": 0.22,
                "h": 0.25,
                "hiddenWhen": [
                    "gray"
                ],
                "art": "cat-gray"
            },
            {
                "id": "rope",
                "label": "系船绳结",
                "kind": "rope",
                "x": 0.5,
                "y": 0.86,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "orange",
                    "gray"
                ],
                "hiddenWhen": [
                    "depart"
                ],
                "art": "rope"
            }
        ],
        "steps": [
            {
                "id": "block",
                "source": "barrier",
                "action": "drag",
                "target": "inlet",
                "requires": [],
                "feedback": "挡板立到进水口，水暂时被挡在外面。",
                "hints": [
                    "先阻止新的水进来。",
                    "木板尺寸正好对应进水口。",
                    "把挡水木板拖到进水口。"
                ]
            },
            {
                "id": "weight",
                "source": "sandbag",
                "action": "drag",
                "target": "barrier-set",
                "requires": [
                    "block"
                ],
                "feedback": "沙袋压牢挡板，浪涌不能把它推开。",
                "hints": [
                    "立起来的板还不稳。",
                    "沙袋用来压住板脚。",
                    "把压板沙袋拖到立好的挡水板。"
                ]
            },
            {
                "id": "food",
                "source": "food",
                "action": "drag",
                "target": "shelf",
                "requires": [],
                "feedback": "猫粮箱放上高架，湿地面不会再泡坏食物。",
                "hints": [
                    "重要物资不能留在低处。",
                    "高架现在是干燥的。",
                    "把猫粮箱拖到高处储物架。"
                ]
            },
            {
                "id": "bridge",
                "source": "plank",
                "action": "drag",
                "target": "gap",
                "requires": [
                    "weight"
                ],
                "feedback": "踏板搭在仓库与船之间，小猫有了连续通路。",
                "hints": [
                    "小猫不能直接跨过水隙。",
                    "用另一块木板搭通路。",
                    "把撤离踏板拖到通船空隙。"
                ]
            },
            {
                "id": "orange",
                "source": "orange",
                "action": "drag",
                "target": "bridge",
                "requires": [
                    "bridge"
                ],
                "feedback": "橘猫沿踏板先上船，船身保持稳定。",
                "hints": [
                    "通路已经搭稳。",
                    "一次引导一只小猫。",
                    "把橘色小猫拖到搭好的踏板。"
                ]
            },
            {
                "id": "gray",
                "source": "gray",
                "action": "drag",
                "target": "bridge",
                "requires": [
                    "bridge",
                    "orange"
                ],
                "feedback": "灰猫跟着走上船，两位伙伴都离开了进水区。",
                "hints": [
                    "让第二只伙伴等第一只站稳再走。",
                    "灰猫现在可以跟上。",
                    "把灰色小猫拖到搭好的踏板。"
                ]
            },
            {
                "id": "depart",
                "source": "rope",
                "action": "swipe",
                "requires": [
                    "orange",
                    "gray",
                    "food"
                ],
                "feedback": "系船绳解开，救援船带着大家离开仓库。",
                "hints": [
                    "人和物资都安全了。",
                    "解开系船绳才能离开。",
                    "向上滑动系船绳结。"
                ],
                "direction": "up"
            }
        ],
        "ending": "粮食抬高、进水堵牢、两只猫都安全转移，大家在雨前完成撤离。"
    }),
    make({
        "id": 80,
        "title": "小镇合照",
        "category": "终章",
        "background": "sunroom",
        "story": "八十份委托之后，小镇居民想拍一张合照。相机倾斜、逆光，个子高的邻居还挡住了小猫。",
        "goal": "调平相机、补光并安排每个人入镜",
        "objects": [
            {
                "id": "guide",
                "label": "合照准备卡",
                "kind": "letter",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "准备卡：相机调平、用反光板柔和补光、高个后排、小猫前排，最后启动定时器。",
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "camera",
                "label": "三脚架相机",
                "kind": "box",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "description": "先调平和补光，让高个站后、小猫在前，最后开定时器再拍照。",
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "level",
                "label": "气泡水平仪",
                "kind": "rod",
                "x": 0.2,
                "y": 0.78,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "level"
                ],
                "visibleWhen": []
            },
            {
                "id": "reflector",
                "label": "柔光反光板",
                "kind": "mirror",
                "x": 0.8,
                "y": 0.78,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "light"
                ],
                "visibleWhen": []
            },
            {
                "id": "light-mark",
                "label": "补光位置",
                "kind": "sun",
                "x": 0.8,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [],
                "hiddenWhen": []
            },
            {
                "id": "tall",
                "label": "高个邻居",
                "kind": "person",
                "x": 0.2,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "rear"
                ],
                "visibleWhen": []
            },
            {
                "id": "rear",
                "label": "后排站位",
                "kind": "footprint",
                "x": 0.5,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "rear"
                ],
                "visibleWhen": []
            },
            {
                "id": "kitten",
                "label": "小猫助手",
                "kind": "cat",
                "x": 0.5,
                "y": 0.78,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "front"
                ],
                "visibleWhen": []
            },
            {
                "id": "front",
                "label": "前排站位",
                "kind": "footprint",
                "x": 0.8,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "front"
                ],
                "visibleWhen": []
            },
            {
                "id": "tall-set",
                "label": "站好的邻居",
                "kind": "person",
                "x": 0.5,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "rear"
                ],
                "hiddenWhen": []
            },
            {
                "id": "kitten-set",
                "label": "站好的小猫",
                "kind": "cat",
                "x": 0.8,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "front"
                ],
                "hiddenWhen": []
            },
            {
                "id": "photo",
                "label": "小镇合照",
                "kind": "painting",
                "x": 0.2,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "photo"
                ],
                "hiddenWhen": []
            },
            {
                "id": "shirt-dust",
                "label": "邻居衣服上的灰",
                "kind": "dust",
                "x": 0.2,
                "y": 0.5,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [],
                "hiddenWhen": [
                    "shirt-dust",
                    "rear"
                ],
                "art": "dust",
                "description": "衣服上的灰被拍掉，邻居开心站直了。"
            },
            {
                "id": "backdrop",
                "label": "卷起的合照背景",
                "kind": "curtain",
                "x": 0.5,
                "y": 0.1,
                "w": 0.3,
                "h": 0.12,
                "hiddenWhen": [
                    "backdrop"
                ],
                "description": "把背景展开，照片里就不会出现杂乱旧架子。",
                "visibleWhen": []
            }
        ],
        "steps": [
            {
                "id": "level",
                "source": "level",
                "action": "drag",
                "target": "camera",
                "requires": [],
                "feedback": "气泡移到中央，相机保持水平，画面不再倾斜。",
                "hints": [
                    "让拍摄基准保持端正。",
                    "水平仪的气泡应在中央。",
                    "把气泡水平仪拖到三脚架相机。"
                ]
            },
            {
                "id": "light",
                "source": "reflector",
                "action": "drag",
                "target": "light-mark",
                "requires": [],
                "feedback": "反光板把柔光送向大家的脸，逆光中的表情也清楚了。",
                "hints": [
                    "背后很亮，脸部却暗。",
                    "在补光位置放一块柔和反光板。",
                    "把柔光反光板拖到补光位置。"
                ]
            },
            {
                "id": "shirt-dust",
                "source": "shirt-dust",
                "action": "scrub",
                "requires": [],
                "feedback": "衣服上的灰被拍掉，邻居开心站直了。",
                "hints": [
                    "高个邻居刚帮大家搬过箱子。",
                    "先轻轻理净衣服上的灰。",
                    "在邻居衣服的灰上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "rear",
                "source": "tall",
                "action": "drag",
                "target": "rear",
                "requires": [
                    "shirt-dust"
                ],
                "feedback": "高个邻居站到后排，不再遮住前方的小伙伴。",
                "hints": [
                    "安排站位时先考虑遮挡。",
                    "高个站后排更容易让大家都入镜。",
                    "把高个邻居拖到后排站位。"
                ]
            },
            {
                "id": "front",
                "source": "kitten",
                "action": "drag",
                "target": "front",
                "requires": [],
                "feedback": "小猫坐在前排，耳朵和笑脸都能被镜头看到。",
                "hints": [
                    "矮个伙伴应该在哪一排？",
                    "前排站位正为小猫留着。",
                    "把小猫助手拖到前排站位。"
                ]
            },
            {
                "id": "backdrop",
                "source": "backdrop",
                "action": "swipe",
                "requires": [],
                "feedback": "合照背景展开，小镇猫爪徽记整齐地出现在大家后面。",
                "hints": [
                    "背景还卷着。",
                    "把卷帘向上舒展开。",
                    "向上滑动合照背景。"
                ],
                "direction": "up"
            },
            {
                "id": "timer",
                "source": "camera",
                "action": "hold",
                "requires": [
                    "level",
                    "light",
                    "rear",
                    "front",
                    "backdrop"
                ],
                "feedback": "相机进入定时待拍模式，调查员也走进了队伍，拍摄指示亮起。",
                "hints": [
                    "环境和站位都准备完毕。",
                    "按住相机进入延时待拍。",
                    "按住三脚架相机约一秒。"
                ],
                "durationMs": 1200
            },
            {
                "id": "photo",
                "source": "camera",
                "action": "tap",
                "requires": [
                    "timer"
                ],
                "feedback": "咔嚓！水平、补光与站位都合适，整座小镇的笑脸留在了照片里。",
                "hints": [
                    "所有人都已到位。",
                    "拍摄指示已亮，可以留下合照。",
                    "再次点击三脚架相机完成拍摄。"
                ]
            }
        ],
        "ending": "八十份委托串起八十次相遇。小镇把合照挂在侦探社门口：谢谢你，也欢迎随时回来。",
        "mechanism": "合照准备与多支线收束",
        "legacyInspiration": "旧第11/28关：调整环境和角色状态，完成一张自然合照",
        "timeLimitSeconds": 310,
        "sceneCaption": "八十份委托之后，小镇居民想拍一张合照。"
    })
];
