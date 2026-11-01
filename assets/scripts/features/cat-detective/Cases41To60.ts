import { make, CaseDefinition } from './CaseTypes';

/** 糖果美术版：第41—60关，以场景动作和多阶段目标组织谜题。 */
export const CASES_41_60: readonly CaseDefinition[] = [
    make({
        "id": 41,
        "title": "漏走的沙子",
        "category": "材料",
        "background": "sunroom",
        "story": "园丁想留下花种，却把种子和细沙混进了同一只盆。筛网和纸漏斗能各做什么？",
        "goal": "留下花种，把细沙收进空罐",
        "objects": [
            {
                "id": "guide",
                "label": "园艺便签",
                "kind": "paper",
                "x": 0.2,
                "y": 0.27,
                "w": 0.15,
                "h": 0.15,
                "description": "种子比筛孔大，细沙比筛孔小。筛出的沙也要收好。"
            },
            {
                "id": "funnel",
                "label": "纸漏斗",
                "kind": "paper",
                "x": 0.2,
                "y": 0.74,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "funnel"
                ]
            },
            {
                "id": "jar",
                "label": "空收集罐",
                "kind": "bottle",
                "x": 0.5,
                "y": 0.74,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "sieve",
                "label": "细孔筛网",
                "kind": "frame",
                "x": 0.8,
                "y": 0.48,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "sieve"
                ]
            },
            {
                "id": "mouth",
                "label": "漏斗口",
                "kind": "stand",
                "x": 0.5,
                "y": 0.51,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "funnel"
                ],
                "hiddenWhen": [
                    "sieve"
                ]
            },
            {
                "id": "ready",
                "label": "架好的筛",
                "kind": "frame",
                "x": 0.5,
                "y": 0.51,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "sieve"
                ],
                "hiddenWhen": [
                    "shake"
                ]
            },
            {
                "id": "mix",
                "label": "种沙混合盆",
                "kind": "bowl",
                "x": 0.8,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "separate"
                ]
            },
            {
                "id": "seed",
                "label": "留下的花种",
                "kind": "plant",
                "x": 0.5,
                "y": 0.49,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "separate",
                    "shake"
                ]
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "guide",
                "action": "tap",
                "requires": [],
                "feedback": "便签画着筛孔：细沙能穿过，花种留在上面；先准备接沙的容器。",
                "hints": [
                    "看看两种颗粒有什么差别。",
                    "比筛孔小的会漏下去。",
                    "点击园艺便签。"
                ]
            },
            {
                "id": "funnel",
                "source": "funnel",
                "action": "drag",
                "target": "jar",
                "requires": [
                    "read"
                ],
                "feedback": "纸漏斗搭在罐口，细沙不会洒到地上。",
                "hints": [
                    "细沙穿过后要到哪里？",
                    "窄罐口需要一个汇集入口。",
                    "把纸漏斗拖到空收集罐。"
                ]
            },
            {
                "id": "sieve",
                "source": "sieve",
                "action": "drag",
                "target": "mouth",
                "requires": [
                    "funnel"
                ],
                "feedback": "筛网架在漏斗上方，下面是接沙的罐。",
                "hints": [
                    "谁来把大颗粒留下？",
                    "筛网应在漏斗上面。",
                    "把细孔筛网拖到漏斗口。"
                ]
            },
            {
                "id": "separate",
                "source": "mix",
                "action": "drag",
                "target": "ready",
                "requires": [
                    "sieve"
                ],
                "feedback": "沙粒穿过筛网进罐，花种整整齐齐留在筛面。",
                "hints": [
                    "收集和筛选的位置都准备好了。",
                    "现在倒入混合物。",
                    "把种沙混合盆拖到架好的筛。"
                ]
            },
            {
                "id": "shake",
                "source": "ready",
                "action": "hold",
                "requires": [
                    "separate"
                ],
                "feedback": "轻轻筛动，最后的细沙也落进罐子，种子留在筛面。",
                "hints": [
                    "混合物倒入后还有沙卡在孔里。",
                    "轻轻筛动，不要把花种甩出。",
                    "按住架好的筛约一秒。"
                ],
                "durationMs": 1100
            }
        ],
        "ending": "花种和细沙各回各家，园丁给侦探社种下了一盆新花。",
        "mechanism": "颗粒筛分与分步收集",
        "legacyInspiration": "旧第2关：准备、处理和归位分别形成可见结果",
        "timeLimitSeconds": 250,
        "sceneCaption": "园丁想留下花种，却把种子和细沙混进了同一只盆。"
    }),
    make({
        "id": 42,
        "title": "错投的包裹",
        "category": "推理",
        "background": "market",
        "story": "三个包裹的外纸都写着“给猫奶奶”。她订的是一罐茶，怎样找对而不拆封？",
        "goal": "核对规格，把三件错投包裹各归其主",
        "objects": [
            {
                "id": "order",
                "label": "订货规格",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "茶罐是圆柱三格重叶片印；工具是长盒三格重鱼印；画稿是扁盒一格重月印。"
            },
            {
                "id": "scale",
                "label": "称重记录",
                "kind": "clue",
                "x": 0.5,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "长盒重三格；圆筒重三格；扁盒重一格。"
            },
            {
                "id": "seal",
                "label": "封口拓样",
                "kind": "paper",
                "x": 0.8,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "圆筒封口是叶片，长盒是鱼，扁盒是月亮。包装纸上的名字不能单独作证。"
            },
            {
                "id": "long",
                "label": "长方包裹",
                "kind": "box",
                "x": 0.2,
                "y": 0.6,
                "w": 0.15,
                "h": 0.15,
                "description": "重量符合，但形状和鱼形封口都与茶罐规格矛盾。",
                "hiddenWhen": [
                    "tools"
                ]
            },
            {
                "id": "tea",
                "label": "圆筒包裹",
                "kind": "bottle",
                "x": 0.5,
                "y": 0.6,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "deliver"
                ],
                "description": "圆柱、三格、叶片印三项吻合；应先核对三份记录。"
            },
            {
                "id": "flat",
                "label": "扁平包裹",
                "kind": "paper",
                "x": 0.8,
                "y": 0.6,
                "w": 0.15,
                "h": 0.15,
                "description": "只有一格重，封口是月亮，与茶罐规格不符。",
                "hiddenWhen": [
                    "art"
                ]
            },
            {
                "id": "desk",
                "label": "交付台",
                "kind": "stand",
                "x": 0.5,
                "y": 0.82,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "received",
                "label": "签收茶罐",
                "kind": "bottle",
                "x": 0.5,
                "y": 0.55,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "deliver"
                ]
            },
            {
                "id": "tool-desk",
                "label": "修理店柜台",
                "kind": "stand",
                "x": 0.2,
                "y": 0.82,
                "w": 0.19,
                "h": 0.17,
                "visibleWhen": [
                    "order"
                ]
            },
            {
                "id": "art-desk",
                "label": "画家收件处",
                "kind": "stand",
                "x": 0.8,
                "y": 0.82,
                "w": 0.19,
                "h": 0.17,
                "visibleWhen": [
                    "order"
                ]
            }
        ],
        "steps": [
            {
                "id": "order",
                "source": "order",
                "action": "tap",
                "requires": [],
                "feedback": "三份订单：茶罐对应圆柱、三格、叶印；工具对应长盒、三格、鱼印；画稿对应扁盒、一格、月印。",
                "hints": [
                    "名字相同，还能比较什么？",
                    "先读清楚真正的订货规格。",
                    "点击订货规格。"
                ]
            },
            {
                "id": "weight",
                "source": "scale",
                "action": "tap",
                "requires": [],
                "feedback": "长盒与圆筒都重三格，重量只能排除扁盒。",
                "hints": [
                    "只靠重量能排除全部错误答案吗？",
                    "两件包裹同重，需要其他条件。",
                    "点击称重记录。"
                ]
            },
            {
                "id": "seal",
                "source": "seal",
                "action": "tap",
                "requires": [],
                "feedback": "圆筒的叶片封口与订单相符，长盒的鱼形印不同。",
                "hints": [
                    "封口留下了商品类别。",
                    "寻找和订单相同的叶片印。",
                    "点击封口拓样。"
                ]
            },
            {
                "id": "deliver",
                "source": "tea",
                "action": "drag",
                "target": "desk",
                "requires": [
                    "order",
                    "weight",
                    "seal"
                ],
                "feedback": "圆筒包裹的三项规格全部符合，猫奶奶确认签收。",
                "hints": [
                    "把三个条件取交集。",
                    "只有圆筒同时符合形状、重量和封印。",
                    "把圆筒包裹拖到交付台。"
                ]
            },
            {
                "id": "tools",
                "source": "long",
                "action": "drag",
                "target": "tool-desk",
                "requires": [
                    "order",
                    "weight",
                    "seal"
                ],
                "feedback": "长盒工具交到修理店，三格重量和鱼印完全对应。",
                "hints": [
                    "还剩两位收件人的物品。",
                    "长盒、三格、鱼印对应修理工具。",
                    "把长方包裹拖到修理店柜台。"
                ]
            },
            {
                "id": "art",
                "source": "flat",
                "action": "drag",
                "target": "art-desk",
                "requires": [
                    "order",
                    "weight",
                    "seal"
                ],
                "feedback": "扁盒画稿交给画家，所有错投包裹都找到了主人。",
                "hints": [
                    "最后一件很轻，而且是扁平的。",
                    "一格重、月印对应画稿。",
                    "把扁平包裹拖到画家收件处。"
                ]
            }
        ],
        "ending": "三个同名收件人的包裹终于分清了，谁也不用拆开别人的礼物。",
        "mechanism": "三项规格交集与多目标归还",
        "legacyInspiration": "旧第53/54关：多个物件分别归到正确目标",
        "timeLimitSeconds": 270,
        "sceneCaption": "三个包裹的外纸都写着“给猫奶奶”。"
    }),
    make({
        "id": 43,
        "title": "只进不出的抽屉",
        "category": "空间",
        "background": "office",
        "story": "抽屉能打开一条缝，里面的长尺却横着卡住了。说明书提醒不要硬拉。",
        "goal": "转动长尺，让抽屉顺利打开",
        "objects": [
            {
                "id": "manual",
                "label": "抽屉说明",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "窄口的对角方向比直边更长；先让物品有转动空间。"
            },
            {
                "id": "drawer",
                "label": "半开抽屉",
                "kind": "box",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "push"
                ],
                "description": "长尺顶在两侧，硬拉不会改变它横放的方向。"
            },
            {
                "id": "closed",
                "label": "退回的抽屉",
                "kind": "box",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "push"
                ],
                "hiddenWhen": [
                    "turn"
                ]
            },
            {
                "id": "rod",
                "label": "卡住长尺",
                "kind": "rod",
                "x": 0.8,
                "y": 0.48,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "turn"
                ],
                "description": "先把抽屉略推回，长尺才有转动空间。"
            },
            {
                "id": "diagonal",
                "label": "斜放长尺",
                "kind": "rod",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "turn"
                ],
                "hiddenWhen": [
                    "take"
                ]
            },
            {
                "id": "tray",
                "label": "工具托盘",
                "kind": "tray",
                "x": 0.2,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "handle",
                "label": "抽屉把手",
                "kind": "button",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "open",
                "label": "打开的抽屉",
                "kind": "box",
                "x": 0.5,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "open"
                ]
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "manual",
                "action": "tap",
                "requires": [],
                "feedback": "说明书画出对角取物的方法：退回、转斜、取出，再拉开。",
                "hints": [
                    "开口方向可以改变吗？",
                    "对角方向能容纳更长的尺。",
                    "点击抽屉说明。"
                ]
            },
            {
                "id": "push",
                "source": "drawer",
                "action": "swipe",
                "requires": [
                    "read"
                ],
                "feedback": "抽屉稍稍退回，尺子两端不再紧顶侧壁。",
                "hints": [
                    "长尺顶住两侧，不能硬拉。",
                    "先把抽屉稍稍推回。",
                    "向上滑动半开的抽屉。"
                ],
                "direction": "up"
            },
            {
                "id": "turn",
                "source": "rod",
                "action": "drag",
                "target": "closed",
                "requires": [
                    "push"
                ],
                "feedback": "长尺转成对角方向，两端与窄口错开。",
                "hints": [
                    "尺子不能再横着通过。",
                    "让尺沿开口的对角线放置。",
                    "把卡住长尺拖到退回的抽屉。"
                ]
            },
            {
                "id": "take",
                "source": "diagonal",
                "action": "drag",
                "target": "tray",
                "requires": [
                    "turn"
                ],
                "feedback": "长尺沿对角方向被取出，放进工具托盘。",
                "hints": [
                    "阻碍已经转到可通过的方向。",
                    "把尺收进工具托盘。",
                    "把斜放长尺拖到工具托盘。"
                ]
            },
            {
                "id": "open",
                "source": "handle",
                "action": "swipe",
                "requires": [
                    "take"
                ],
                "feedback": "把手轻轻一拉，抽屉完整滑开了。",
                "hints": [
                    "卡住的尺已经取走。",
                    "现在沿滑轨拉开抽屉。",
                    "向下滑动抽屉把手。"
                ],
                "direction": "down"
            }
        ],
        "ending": "委托书找到了。侦探把“先留转动空间”记进了工具笔记。",
        "mechanism": "留转动空间与对角取物",
        "legacyInspiration": "旧第30关：物件受限原因不同，动作顺序随原因改变",
        "timeLimitSeconds": 250,
        "sceneCaption": "抽屉能打开一条缝，里面的长尺却横着卡住了。"
    }),
    make({
        "id": 44,
        "title": "晾不干的手帕",
        "category": "环境",
        "background": "sunroom",
        "story": "两条手帕叠在一起晒了一下午，接触的地方仍然湿。太阳已经很足了。",
        "goal": "让两条手帕分开通风",
        "objects": [
            {
                "id": "wet",
                "label": "潮湿接触面",
                "kind": "water",
                "x": 0.5,
                "y": 0.26,
                "w": 0.15,
                "h": 0.15,
                "description": "外侧已经干了，湿处只在两条布紧贴的位置。"
            },
            {
                "id": "cloth",
                "label": "叠着的手帕",
                "kind": "cloth",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "space"
                ]
            },
            {
                "id": "hook",
                "label": "空晾晒钩",
                "kind": "hook",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "spread",
                "label": "分开的手帕",
                "kind": "cloth",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "space"
                ],
                "hiddenWhen": [
                    "dry"
                ]
            },
            {
                "id": "fan",
                "label": "送风开关",
                "kind": "button",
                "x": 0.2,
                "y": 0.78,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "dry",
                "label": "干燥手帕",
                "kind": "cloth",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "dry"
                ]
            },
            {
                "id": "cloth-clip",
                "label": "夹住手帕的衣夹",
                "kind": "clip",
                "x": 0.2,
                "y": 0.52,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "inspect"
                ],
                "hiddenWhen": [
                    "cloth-clip",
                    "space"
                ],
                "art": "clip",
                "description": "衣夹松开，叠着的手帕可以移到另一只空钩。"
            }
        ],
        "steps": [
            {
                "id": "inspect",
                "source": "wet",
                "action": "tap",
                "requires": [],
                "feedback": "湿处都在贴合面，继续加热也难让里面的水汽散开。",
                "hints": [
                    "湿的地方和干的地方有何不同？",
                    "接触面没有流动空气。",
                    "点击潮湿接触面。"
                ]
            },
            {
                "id": "cloth-clip",
                "source": "cloth-clip",
                "action": "tap",
                "requires": [
                    "inspect"
                ],
                "feedback": "衣夹松开，叠着的手帕可以移到另一只空钩。",
                "hints": [
                    "两条手帕还被同一个夹子固定。",
                    "先松开夹点。",
                    "点击夹住手帕的衣夹。"
                ]
            },
            {
                "id": "space",
                "source": "cloth",
                "action": "drag",
                "target": "hook",
                "requires": [
                    "inspect",
                    "cloth-clip"
                ],
                "feedback": "手帕被移到空钩，两面之间留出了空气通道。",
                "hints": [
                    "先让湿的表面露出来。",
                    "旁边的空钩能分开两条布。",
                    "把叠着的手帕拖到空晾晒钩。"
                ]
            },
            {
                "id": "dry",
                "source": "fan",
                "action": "tap",
                "requires": [
                    "space"
                ],
                "feedback": "微风经过两面，水汽散开，两条手帕都干了。",
                "hints": [
                    "表面露出后还需要空气流过。",
                    "用微风带走水汽。",
                    "点击送风开关。"
                ]
            },
            {
                "id": "fold-dry",
                "source": "dry",
                "action": "swipe",
                "requires": [
                    "dry"
                ],
                "feedback": "干燥手帕沿中线折好，没有再把湿接触面叠在一起。",
                "hints": [
                    "晾干后再把手帕收好。",
                    "顺着中线对折。",
                    "向上滑动干燥手帕。"
                ],
                "direction": "up"
            }
        ],
        "ending": "猫奶奶收下干手帕，给晾衣绳留出了更宽的间隔。",
        "mechanism": "夹点释放与双面通风",
        "legacyInspiration": "旧第42关：通风必须作用于真实受阻的位置",
        "timeLimitSeconds": 250,
        "sceneCaption": "两条手帕叠在一起晒了一下午，接触的地方仍然湿。"
    }),
    make({
        "id": 45,
        "title": "热气球上的猫队",
        "category": "救援",
        "background": "balloon",
        "mechanism": "多目标减重与起飞救援",
        "legacyInspiration": "旧第1关：移走不必要重量、保留角色并完成起飞阶段",
        "sceneCaption": "吊篮超载、伞面兜风、锚绳未解，伙伴还站在地面。",
        "story": "小猫们的热气球赶不上猫咪庆典了。先把不随行的重物卸回地面，收起兜风的伞，再给伙伴留出安全座位。",
        "goal": "卸下多余负重，让猫队安全起飞",
        "timeLimitSeconds": 300,
        "objects": [
            {
                "id": "balloon",
                "label": "热气球",
                "kind": "box",
                "x": 0.5,
                "y": 0.28,
                "w": 0.44,
                "h": 0.4,
                "art": "balloon"
            },
            {
                "id": "basket",
                "label": "安全吊篮",
                "kind": "bag",
                "x": 0.5,
                "y": 0.57,
                "w": 0.28,
                "h": 0.2,
                "art": "balloon-basket"
            },
            {
                "id": "bag-a",
                "label": "左侧沙袋",
                "kind": "box",
                "x": 0.17,
                "y": 0.59,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "weight-a"
                ],
                "art": "sandbag"
            },
            {
                "id": "bag-b",
                "label": "中间沙袋",
                "kind": "box",
                "x": 0.39,
                "y": 0.78,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "weight-b"
                ],
                "art": "sandbag"
            },
            {
                "id": "bag-c",
                "label": "右侧沙袋",
                "kind": "box",
                "x": 0.63,
                "y": 0.78,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "weight-c"
                ],
                "art": "sandbag"
            },
            {
                "id": "ground",
                "label": "地面卸货垫",
                "kind": "tray",
                "x": 0.84,
                "y": 0.83,
                "w": 0.22,
                "h": 0.17,
                "art": "tray",
                "description": "沙袋应留在地面，不要往乘客身上放。"
            },
            {
                "id": "umbrella",
                "label": "兜风的伞",
                "kind": "umbrella",
                "x": 0.82,
                "y": 0.23,
                "w": 0.22,
                "h": 0.25,
                "hiddenWhen": [
                    "umbrella"
                ],
                "art": "umbrella"
            },
            {
                "id": "burner",
                "label": "升温旋钮",
                "kind": "button",
                "x": 0.16,
                "y": 0.32,
                "w": 0.17,
                "h": 0.17,
                "art": "button-red",
                "description": "负重与兜风问题处理后，稳定升温才有效。"
            },
            {
                "id": "anchor",
                "label": "锚绳绳结",
                "kind": "rope",
                "x": 0.81,
                "y": 0.52,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "anchor"
                ],
                "art": "rope",
                "description": "地面锚绳还没有解开。"
            },
            {
                "id": "kitten",
                "label": "等候小猫",
                "kind": "cat",
                "x": 0.16,
                "y": 0.83,
                "w": 0.23,
                "h": 0.25,
                "hiddenWhen": [
                    "board"
                ],
                "art": "cat-kitten"
            },
            {
                "id": "passenger",
                "label": "吊篮里的猫",
                "kind": "cat",
                "x": 0.5,
                "y": 0.53,
                "w": 0.23,
                "h": 0.24,
                "visibleWhen": [
                    "board"
                ],
                "art": "cat-orange"
            }
        ],
        "steps": [
            {
                "id": "weight-a",
                "source": "bag-a",
                "action": "drag",
                "target": "ground",
                "requires": [],
                "feedback": "左侧沙袋卸到地面，吊篮轻了一些。",
                "hints": [
                    "不是所有东西都要随气球飞走。",
                    "先卸掉地面用的沙袋。",
                    "把左侧沙袋拖到地面卸货垫。"
                ]
            },
            {
                "id": "weight-b",
                "source": "bag-b",
                "action": "drag",
                "target": "ground",
                "requires": [],
                "feedback": "第二只沙袋卸下，气球开始抬起一点。",
                "hints": [
                    "吊篮里还有沉重负担。",
                    "中间沙袋也不随行。",
                    "把中间沙袋拖到地面卸货垫。"
                ]
            },
            {
                "id": "weight-c",
                "source": "bag-c",
                "action": "drag",
                "target": "ground",
                "requires": [],
                "feedback": "最后一只沙袋回到地面，重量降到安全范围。",
                "hints": [
                    "最后一只沙袋还挂着。",
                    "只卸货物，不要移动乘客。",
                    "把右侧沙袋拖到地面卸货垫。"
                ]
            },
            {
                "id": "umbrella",
                "source": "umbrella",
                "action": "swipe",
                "requires": [],
                "feedback": "雨伞收拢，不再像风帆一样兜住横风。",
                "hints": [
                    "气球旁边还有东西在兜风。",
                    "把伞收起来。",
                    "向上滑动兜风的伞。"
                ],
                "direction": "up"
            },
            {
                "id": "heat",
                "source": "burner",
                "action": "hold",
                "requires": [
                    "weight-a",
                    "weight-b",
                    "weight-c",
                    "umbrella"
                ],
                "feedback": "稳定热气让气囊鼓起来，起飞条件准备好了。",
                "hints": [
                    "负重合适后才需要增加浮力。",
                    "稳定升温，不要连续乱点。",
                    "按住升温旋钮约一秒。"
                ],
                "durationMs": 1200
            },
            {
                "id": "board",
                "source": "kitten",
                "action": "drag",
                "target": "basket",
                "requires": [
                    "umbrella"
                ],
                "feedback": "小猫坐进吊篮，爪子收在安全围栏里。",
                "hints": [
                    "地面的伙伴还没上来。",
                    "把它放进有围栏的吊篮。",
                    "把等候小猫拖到安全吊篮。"
                ]
            },
            {
                "id": "anchor",
                "source": "anchor",
                "action": "swipe",
                "requires": [
                    "heat",
                    "board"
                ],
                "feedback": "锚绳解开，吊篮离开地面缓缓升空。",
                "hints": [
                    "所有人都坐稳了，但气球仍被拉着。",
                    "向上松开地面锚结。",
                    "向上滑动锚绳绳结。"
                ],
                "direction": "up"
            }
        ],
        "ending": "猫队带着真正需要的行李升空，地面上的沙袋一个也没有丢失。"
    }),
    make({
        "id": 46,
        "title": "桥上的限重牌",
        "category": "配载",
        "background": "harbor",
        "story": "送货小车要过便桥。牌上写着“车与货合计不超过五格”，车本身已经重两格。",
        "goal": "装上能安全过桥的三格货箱",
        "objects": [
            {
                "id": "sign",
                "label": "五格限重牌",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "限重包含车的两格。可再装的货最多三格，不是五格。"
            },
            {
                "id": "ticket",
                "label": "车辆称重单",
                "kind": "paper",
                "x": 0.5,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "空车两格；三格箱三格，五格箱五格。不能忽略空车重量。"
            },
            {
                "id": "small",
                "label": "三格货箱",
                "kind": "box",
                "x": 0.2,
                "y": 0.6,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "load"
                ]
            },
            {
                "id": "large",
                "label": "五格货箱",
                "kind": "box",
                "x": 0.8,
                "y": 0.6,
                "w": 0.15,
                "h": 0.15,
                "description": "它自己就重五格，加上车会达到七格，超出限制。"
            },
            {
                "id": "cart",
                "label": "两格空车",
                "kind": "wheel",
                "x": 0.5,
                "y": 0.62,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "load"
                ]
            },
            {
                "id": "gate",
                "label": "过桥闸杆",
                "kind": "button",
                "x": 0.8,
                "y": 0.81,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "loaded",
                "label": "五格载货车",
                "kind": "wheel",
                "x": 0.5,
                "y": 0.62,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "load"
                ]
            },
            {
                "id": "ballast",
                "label": "车上的闲置沙袋",
                "kind": "box",
                "x": 0.5,
                "y": 0.62,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "sign",
                    "weigh"
                ],
                "hiddenWhen": [
                    "ballast",
                    "load"
                ],
                "art": "sandbag",
                "description": "闲置沙袋卸到岸边，小车的可用载重重新空出来。"
            }
        ],
        "steps": [
            {
                "id": "sign",
                "source": "sign",
                "action": "tap",
                "requires": [],
                "feedback": "限重计算的是车和货的总和，最多五格。",
                "hints": [
                    "牌上写的是货重还是总重？",
                    "“车与货合计”不能漏算车。",
                    "点击五格限重牌。"
                ]
            },
            {
                "id": "weigh",
                "source": "ticket",
                "action": "tap",
                "requires": [],
                "feedback": "空车已占两格，剩下的承载空间只有三格。",
                "hints": [
                    "先确认车自身占了多少。",
                    "五格总限重减去两格车重。",
                    "点击车辆称重单。"
                ]
            },
            {
                "id": "ballast",
                "source": "ballast",
                "action": "swipe",
                "requires": [
                    "sign",
                    "weigh"
                ],
                "feedback": "闲置沙袋卸到岸边，小车的可用载重重新空出来。",
                "hints": [
                    "车上还带着不需要的重量。",
                    "把不随车过桥的沙袋留在岸边。",
                    "向右滑动车上的沙袋。"
                ],
                "direction": "right"
            },
            {
                "id": "load",
                "source": "small",
                "action": "drag",
                "target": "cart",
                "requires": [
                    "sign",
                    "weigh",
                    "ballast"
                ],
                "feedback": "三格货加两格车，合计正好五格。",
                "hints": [
                    "选择加上车后仍不超限的货物。",
                    "三格箱符合剩余承载空间。",
                    "把三格货箱拖到两格空车。"
                ]
            },
            {
                "id": "cross",
                "source": "gate",
                "action": "hold",
                "requires": [
                    "load"
                ],
                "feedback": "闸杆放行，货车平稳通过便桥。",
                "hints": [
                    "限重已核实，小车装载也合适。",
                    "让小车缓慢稳定地过桥。",
                    "按住桥边通行位置约一秒。"
                ],
                "durationMs": 1100
            }
        ],
        "ending": "小猫把“车也算重量”写在了送货本最上面。",
        "mechanism": "总重量与卸载选择",
        "legacyInspiration": "旧第1关：移走多余负重，保留真正需要的东西",
        "timeLimitSeconds": 250,
        "sceneCaption": "送货小车要过便桥。"
    }),
    make({
        "id": 47,
        "title": "空瓶里的木塞",
        "category": "浮力",
        "background": "kitchen",
        "story": "木塞掉进细口瓶，爪子伸不进去。瓶身标着“木塞会浮，水位不要超过安全线”。",
        "goal": "用水把木塞送到瓶口",
        "objects": [
            {
                "id": "label",
                "label": "瓶身说明",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "木塞会随水面上升，瓶身有清楚的最高水位线。无需伸爪或敲瓶。"
            },
            {
                "id": "water",
                "label": "小水壶",
                "kind": "water",
                "x": 0.2,
                "y": 0.73,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "fill"
                ]
            },
            {
                "id": "bottle",
                "label": "细口空瓶",
                "kind": "bottle",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "fill"
                ]
            },
            {
                "id": "full",
                "label": "到线水瓶",
                "kind": "bottle",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "fill"
                ]
            },
            {
                "id": "cork",
                "label": "浮起木塞",
                "kind": "stone",
                "x": 0.8,
                "y": 0.45,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "fill"
                ],
                "hiddenWhen": [
                    "take"
                ]
            },
            {
                "id": "tray",
                "label": "木塞托盘",
                "kind": "tray",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "bottle-cap",
                "label": "瓶口软盖",
                "kind": "cover",
                "x": 0.5,
                "y": 0.5,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "read"
                ],
                "hiddenWhen": [
                    "bottle-cap",
                    "fill"
                ],
                "art": "cover",
                "description": "软盖拔开，水可以缓缓倒进瓶里。"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "label",
                "action": "tap",
                "requires": [],
                "feedback": "木塞会浮在水面，升高水位能把它送到瓶口。",
                "hints": [
                    "木塞碰到水会怎样？",
                    "瓶身说明给出了安全做法。",
                    "点击瓶身说明。"
                ]
            },
            {
                "id": "bottle-cap",
                "source": "bottle-cap",
                "action": "swipe",
                "requires": [
                    "read"
                ],
                "feedback": "软盖拔开，水可以缓缓倒进瓶里。",
                "hints": [
                    "瓶口还盖着软盖。",
                    "先拔出瓶盖。",
                    "向上滑动瓶口软盖。"
                ],
                "direction": "up"
            },
            {
                "id": "fill",
                "source": "water",
                "action": "drag",
                "target": "bottle",
                "requires": [
                    "read",
                    "bottle-cap"
                ],
                "feedback": "水加到安全线，木塞随水面升到了瓶口。",
                "hints": [
                    "让水面代替爪子抬高木塞。",
                    "按瓶身安全线缓慢加水。",
                    "把小水壶拖到细口空瓶。"
                ]
            },
            {
                "id": "float",
                "source": "full",
                "action": "hold",
                "requires": [
                    "fill"
                ],
                "feedback": "水面渐渐稳定，木塞浮到瓶口，不再打转。",
                "hints": [
                    "木塞正在水里打转。",
                    "稳住瓶子，等水面平静。",
                    "按住装水的瓶子约一秒。"
                ],
                "durationMs": 1000
            },
            {
                "id": "take",
                "source": "cork",
                "action": "drag",
                "target": "tray",
                "requires": [
                    "fill",
                    "float"
                ],
                "feedback": "瓶口的木塞被轻松取下，放回托盘。",
                "hints": [
                    "木塞已经来到够得着的高度。",
                    "把它收好，不用倒掉整瓶水。",
                    "把浮起木塞拖到木塞托盘。"
                ]
            }
        ],
        "ending": "没有敲碎瓶子，也没有弄湿委托书，木塞顺利取回。",
        "mechanism": "开口与浮力取物",
        "legacyInspiration": "旧第30关：先理解瓶内限制，再用环境改变目标位置",
        "timeLimitSeconds": 250,
        "sceneCaption": "木塞掉进细口瓶，爪子伸不进去。"
    }),
    make({
        "id": 48,
        "title": "反方向的齿轮",
        "category": "传动",
        "background": "workshop",
        "story": "检修后的卷帘越转越往下。说明图要求输入轮与输出轮同向，现在却直接啮合。",
        "goal": "加入中间齿轮，让卷帘向上",
        "objects": [
            {
                "id": "guide",
                "label": "传动示意图",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "相邻齿轮转向相反。加入一个中间轮后，首尾两轮转向相同。"
            },
            {
                "id": "handle",
                "label": "断电手柄",
                "kind": "button",
                "x": 0.8,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "idler",
                "label": "中间齿轮",
                "kind": "gear",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "install"
                ]
            },
            {
                "id": "slot",
                "label": "中间轮轴",
                "kind": "stand",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "install"
                ]
            },
            {
                "id": "set",
                "label": "三轮传动组",
                "kind": "gear",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "install"
                ]
            },
            {
                "id": "test",
                "label": "试转摇柄",
                "kind": "rod",
                "x": 0.8,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "open",
                "label": "升起的卷帘",
                "kind": "curtain",
                "x": 0.5,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "test"
                ]
            },
            {
                "id": "slot-grit",
                "label": "齿轮缺口沙粒",
                "kind": "dust",
                "x": 0.5,
                "y": 0.5,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "stop"
                ],
                "hiddenWhen": [
                    "slot-grit",
                    "install"
                ],
                "art": "dust",
                "description": "沙粒清走，传动槽能让新齿轮顺畅转动。"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "guide",
                "action": "tap",
                "requires": [],
                "feedback": "示意图：两轮直接啮合反向，三轮啮合时首尾同向。",
                "hints": [
                    "需要改变的是速度还是方向？",
                    "数一数转向被反转了几次。",
                    "点击传动示意图。"
                ]
            },
            {
                "id": "stop",
                "source": "handle",
                "action": "tap",
                "requires": [
                    "read"
                ],
                "feedback": "传动停下，检修轮轴可以安全安装中间轮。",
                "hints": [
                    "碰齿轮前先停止驱动。",
                    "旁边有明确的断电手柄。",
                    "点击断电手柄。"
                ]
            },
            {
                "id": "slot-grit",
                "source": "slot-grit",
                "action": "scrub",
                "requires": [
                    "stop"
                ],
                "feedback": "沙粒清走，传动槽能让新齿轮顺畅转动。",
                "hints": [
                    "槽里的沙会让传动卡住。",
                    "停机后再清理。",
                    "在齿轮缺口的沙粒上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "install",
                "source": "idler",
                "action": "drag",
                "target": "slot",
                "requires": [
                    "stop",
                    "slot-grit"
                ],
                "feedback": "加入中间轮，首尾齿轮之间有了两次方向反转。",
                "hints": [
                    "让方向反转两次。",
                    "把多出的齿轮装到中间轮轴。",
                    "把中间齿轮拖到中间轮轴。"
                ]
            },
            {
                "id": "test",
                "source": "test",
                "action": "hold",
                "requires": [
                    "install"
                ],
                "feedback": "手动试转，输入轮与输出轮同向，卷帘向上升起。",
                "hints": [
                    "齿轮装好了，要观察转向。",
                    "稳稳转动试车手柄。",
                    "按住试车手柄约一秒。"
                ],
                "durationMs": 1000
            }
        ],
        "ending": "卷帘终于升起来，修理员给三个齿轮画上了转向箭头。",
        "mechanism": "中间齿轮与转向传递",
        "legacyInspiration": "旧第2关：安装前处理零件缺口，安装后验证变化",
        "timeLimitSeconds": 250,
        "sceneCaption": "检修后的卷帘越转越往下。"
    }),
    make({
        "id": 49,
        "title": "胡椒去哪了",
        "category": "静电",
        "background": "kitchen",
        "story": "摊主把少量胡椒误撒进了盐盘。实验卡说，摩擦后的塑料棒能先吸起轻胡椒。",
        "goal": "用实验卡的方法分离胡椒",
        "objects": [
            {
                "id": "card",
                "label": "分选实验卡",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "先用干布摩擦塑料棒，再靠近混合盘；轻胡椒先跳起，最后在空盘放下。"
            },
            {
                "id": "rod",
                "label": "塑料棒",
                "kind": "rod",
                "x": 0.2,
                "y": 0.73,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "charge"
                ]
            },
            {
                "id": "cloth",
                "label": "干燥毛布",
                "kind": "cloth",
                "x": 0.5,
                "y": 0.73,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "charged",
                "label": "带电塑料棒",
                "kind": "rod",
                "x": 0.2,
                "y": 0.73,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "charge"
                ],
                "hiddenWhen": [
                    "pick"
                ]
            },
            {
                "id": "mix",
                "label": "盐椒混合盘",
                "kind": "bowl",
                "x": 0.8,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "pepper",
                "label": "吸椒的棒",
                "kind": "rod",
                "x": 0.5,
                "y": 0.48,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "pick"
                ],
                "hiddenWhen": [
                    "drop"
                ]
            },
            {
                "id": "empty",
                "label": "胡椒收集盘",
                "kind": "bowl",
                "x": 0.8,
                "y": 0.77,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "rod-wrap",
                "label": "塑料棒包装纸",
                "kind": "paper",
                "x": 0.2,
                "y": 0.73,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "read"
                ],
                "hiddenWhen": [
                    "rod-wrap",
                    "charge"
                ],
                "art": "paper-scrap",
                "description": "包装纸揭开，塑料棒表面露了出来，可以摩擦。"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "card",
                "action": "tap",
                "requires": [],
                "feedback": "实验卡给出低距离分选方法：干布摩擦，轻胡椒会先被吸起。",
                "hints": [
                    "两种颗粒除了颜色还有什么不同？",
                    "按卡片方法利用重量和带电棒。",
                    "点击分选实验卡。"
                ]
            },
            {
                "id": "rod-wrap",
                "source": "rod-wrap",
                "action": "swipe",
                "requires": [
                    "read"
                ],
                "feedback": "包装纸揭开，塑料棒表面露了出来，可以摩擦。",
                "hints": [
                    "包装纸隔着塑料表面。",
                    "先把包装剥开。",
                    "向右滑动塑料棒的包装纸。"
                ],
                "direction": "right"
            },
            {
                "id": "charge",
                "source": "rod",
                "action": "drag",
                "target": "cloth",
                "requires": [
                    "read",
                    "rod-wrap"
                ],
                "feedback": "塑料棒经干布摩擦，准备好吸引轻颗粒。",
                "hints": [
                    "塑料棒需要先做什么准备？",
                    "摩擦干布是实验卡的第一步。",
                    "把塑料棒拖到干燥毛布。"
                ]
            },
            {
                "id": "pick",
                "source": "mix",
                "action": "hold",
                "requires": [
                    "charge"
                ],
                "feedback": "按标记距离靠近，轻胡椒跳到棒上，盐留在盘里。",
                "hints": [
                    "塑料棒已经带电。",
                    "让棒稳定地靠近混合盘，轻胡椒先跳起来。",
                    "按住盐椒混合盘约一秒完成靠近观察。"
                ],
                "durationMs": 900
            },
            {
                "id": "drop",
                "source": "pepper",
                "action": "drag",
                "target": "empty",
                "requires": [
                    "pick"
                ],
                "feedback": "胡椒在收集盘被轻敲放下，两个调料重新分开。",
                "hints": [
                    "吸起的胡椒还需要一个去处。",
                    "空盘是专门的收集位置。",
                    "把吸椒的棒拖到胡椒收集盘。"
                ]
            }
        ],
        "ending": "分选小实验成功了，摊主为调料瓶换上了更清楚的标签。",
        "mechanism": "摩擦带电与轻颗粒分选",
        "legacyInspiration": "旧第21关：通过物件反应差异找出正确对象",
        "timeLimitSeconds": 250,
        "sceneCaption": "摊主把少量胡椒误撒进了盐盘。"
    }),
    make({
        "id": 50,
        "title": "不会说谎的折痕",
        "category": "证据",
        "background": "office",
        "story": "三张留言都声称曾装进同一只窄信封。只有真正那张留下了能对上封口的旧折痕。",
        "goal": "用旧折痕找回原信",
        "objects": [
            {
                "id": "envelope",
                "label": "原信封",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "封口内侧有两道平行窄折压痕，间距与左侧折线样本一致。"
            },
            {
                "id": "sample",
                "label": "折痕比对卡",
                "kind": "paper",
                "x": 0.5,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "原信封需要两道平行窄折。留言乙是十字折，留言丙只有一道宽折。"
            },
            {
                "id": "a",
                "label": "留言甲",
                "kind": "paper",
                "x": 0.2,
                "y": 0.58,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "match"
                ],
                "description": "它有两道平行窄折，旧纸纤维沿折线发白。"
            },
            {
                "id": "b",
                "label": "留言乙",
                "kind": "paper",
                "x": 0.5,
                "y": 0.58,
                "w": 0.15,
                "h": 0.15,
                "description": "十字折不能对应信封里两道平行窄折的压痕。"
            },
            {
                "id": "c",
                "label": "留言丙",
                "kind": "paper",
                "x": 0.8,
                "y": 0.58,
                "w": 0.15,
                "h": 0.15,
                "description": "只有一道宽折，数量和间距都不相符。"
            },
            {
                "id": "light",
                "label": "斜光检查台",
                "kind": "lamp",
                "x": 0.8,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "original",
                "label": "核实的原信",
                "kind": "paper",
                "x": 0.5,
                "y": 0.8,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "match"
                ]
            }
        ],
        "steps": [
            {
                "id": "seal",
                "source": "envelope",
                "action": "tap",
                "requires": [],
                "feedback": "信封内有两道平行窄折压痕，能与原信的折痕对应。",
                "hints": [
                    "纸曾装进哪里，会留下什么？",
                    "信封内侧也能保存折叠痕迹。",
                    "点击原信封。"
                ]
            },
            {
                "id": "compare",
                "source": "sample",
                "action": "tap",
                "requires": [],
                "feedback": "比对卡显示：只有留言甲的折线数量、方向、间距全相同。",
                "hints": [
                    "只看一条折线不够。",
                    "同时比较数量、方向和间距。",
                    "点击折痕比对卡。"
                ]
            },
            {
                "id": "light",
                "source": "light",
                "action": "hold",
                "requires": [],
                "feedback": "斜光看出甲的旧折纤维发白；新画的线条没有这种凹凸。",
                "hints": [
                    "真假折线在斜光中反应不同。",
                    "稳定光线，留意纸纤维凹凸。",
                    "按住斜光检查台约一秒。"
                ],
                "durationMs": 900
            },
            {
                "id": "refold",
                "source": "a",
                "action": "swipe",
                "requires": [
                    "seal",
                    "compare",
                    "light"
                ],
                "feedback": "留言甲沿旧折线重新折好，边缘宽度与信封一致。",
                "hints": [
                    "观察相符后还要实际折回去。",
                    "沿发白的旧折线折叠。",
                    "向左滑动留言甲。"
                ],
                "direction": "left"
            },
            {
                "id": "match",
                "source": "a",
                "action": "drag",
                "target": "envelope",
                "requires": [
                    "seal",
                    "compare",
                    "light",
                    "refold"
                ],
                "feedback": "留言甲沿旧折线放入，恰好吻合原信封压痕。",
                "hints": [
                    "选择同时通过形状与纸纤维检查的一张。",
                    "留言甲有真实的两道平行窄折。",
                    "把留言甲拖到原信封。"
                ]
            }
        ],
        "ending": "原信重新归档，纸上的经历比一句自称更可靠。",
        "mechanism": "纸纤维证据与实际折叠",
        "legacyInspiration": "旧第4/8关：表面图案之外，还要检验材料痕迹",
        "timeLimitSeconds": 250,
        "sceneCaption": "三张留言都声称曾装进同一只窄信封。"
    }),
    make({
        "id": 51,
        "title": "转不停的指南针",
        "category": "干扰",
        "background": "alley",
        "story": "巷口指南针总朝工具箱偏转。北向标记明明在另一侧，地图却没有画错。",
        "goal": "排除磁性干扰，再校正地图",
        "objects": [
            {
                "id": "north",
                "label": "固定北向牌",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "北向牌固定在石墙上，用于校正，不能跟着指南针一起转。"
            },
            {
                "id": "box",
                "label": "磁扣工具箱",
                "kind": "box",
                "x": 0.5,
                "y": 0.48,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "away"
                ],
                "description": "箱扣带磁，靠近时会让针偏转。先把它移远。"
            },
            {
                "id": "shelf",
                "label": "远处木架",
                "kind": "stand",
                "x": 0.8,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "compass",
                "label": "受扰指南针",
                "kind": "clock",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "check"
                ]
            },
            {
                "id": "steady",
                "label": "稳定指南针",
                "kind": "clock",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "check"
                ]
            },
            {
                "id": "map",
                "label": "旋转地图",
                "kind": "map",
                "x": 0.5,
                "y": 0.78,
                "w": 0.15,
                "h": 0.15
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "north",
                "action": "tap",
                "requires": [],
                "feedback": "固定北向牌与墙上的基准一致，错误来自附近的测量条件。",
                "hints": [
                    "哪个方向依据不会跟着移动？",
                    "墙上的固定北向牌是基准。",
                    "点击固定北向牌。"
                ]
            },
            {
                "id": "away",
                "source": "box",
                "action": "drag",
                "target": "shelf",
                "requires": [
                    "read"
                ],
                "feedback": "磁扣工具箱被移远，指南针不再追着它偏转。",
                "hints": [
                    "针为什么偏向同一个物品？",
                    "工具箱的磁扣是干扰来源。",
                    "把磁扣工具箱拖到远处木架。"
                ]
            },
            {
                "id": "settle",
                "source": "compass",
                "action": "hold",
                "requires": [
                    "away"
                ],
                "feedback": "远离磁扣后，指针停止乱转，稳定指向同一方向。",
                "hints": [
                    "移开干扰后，指针还在摆动。",
                    "等它稳定再读方向。",
                    "按住指南针约一秒。"
                ],
                "durationMs": 1100
            },
            {
                "id": "check",
                "source": "compass",
                "action": "tap",
                "requires": [
                    "away",
                    "settle"
                ],
                "feedback": "针稳定后与固定北向牌一致，方向依据恢复可靠。",
                "hints": [
                    "移走干扰后重新读数。",
                    "确认指针已经稳定。",
                    "点击受扰指南针。"
                ]
            },
            {
                "id": "align",
                "source": "map",
                "action": "drag",
                "target": "steady",
                "requires": [
                    "check"
                ],
                "feedback": "地图的北箭头与稳定指南针一致，车站路线指向正确巷口。",
                "hints": [
                    "最后校正地图自己的方向。",
                    "让地图北箭头和可靠基准重合。",
                    "把旋转地图拖到稳定指南针。"
                ]
            }
        ],
        "ending": "居民们找回方向，工具箱以后有了远离指南针的专属位置。",
        "mechanism": "磁性干扰与方位稳定",
        "legacyInspiration": "旧第4关：先排除影响检测的环境因素",
        "timeLimitSeconds": 250,
        "sceneCaption": "巷口指南针总朝工具箱偏转。"
    }),
    make({
        "id": 52,
        "title": "海边降温行动",
        "category": "救援",
        "background": "harbor",
        "mechanism": "多角色需求与环境降温",
        "legacyInspiration": "旧第42关：遮阳、补水和通风是不同对象的不同需要",
        "sceneCaption": "三位猫咪各有一种不舒服，给错东西不会改善状态。",
        "story": "庆典太热了！橘猫刚跑完步，灰猫的座位晒着太阳，白猫的小风扇还没有装好。分别解决大家的真正需要。",
        "goal": "用遮阳、补水与通风让三只猫凉快下来",
        "timeLimitSeconds": 300,
        "objects": [
            {
                "id": "orange",
                "label": "口渴的橘猫",
                "kind": "cat",
                "x": 0.18,
                "y": 0.48,
                "w": 0.23,
                "h": 0.29,
                "hiddenWhen": [
                    "water"
                ],
                "art": "cat-orange",
                "description": "它刚跑完步，正舔着干干的嘴巴。"
            },
            {
                "id": "orange-cool",
                "label": "喝水的橘猫",
                "kind": "cat",
                "x": 0.18,
                "y": 0.48,
                "w": 0.23,
                "h": 0.29,
                "visibleWhen": [
                    "water"
                ],
                "art": "cat-smile"
            },
            {
                "id": "gray",
                "label": "晒太阳的灰猫",
                "kind": "cat",
                "x": 0.81,
                "y": 0.47,
                "w": 0.23,
                "h": 0.29,
                "hiddenWhen": [
                    "shade"
                ],
                "art": "cat-gray",
                "description": "它只在没有遮挡的阳光下眯着眼睛。"
            },
            {
                "id": "gray-cool",
                "label": "阴凉里的灰猫",
                "kind": "cat",
                "x": 0.81,
                "y": 0.47,
                "w": 0.23,
                "h": 0.29,
                "visibleWhen": [
                    "shade"
                ],
                "art": "cat-gray"
            },
            {
                "id": "white",
                "label": "怕热的白猫",
                "kind": "cat",
                "x": 0.5,
                "y": 0.43,
                "w": 0.23,
                "h": 0.28,
                "hiddenWhen": [
                    "breeze"
                ],
                "art": "cat-white",
                "description": "它的风扇底座还空着，旁边没有一点风。"
            },
            {
                "id": "white-cool",
                "label": "吹风的白猫",
                "kind": "cat",
                "x": 0.5,
                "y": 0.43,
                "w": 0.23,
                "h": 0.28,
                "visibleWhen": [
                    "breeze"
                ],
                "art": "cat-white"
            },
            {
                "id": "water",
                "label": "清凉饮用水",
                "kind": "bottle",
                "x": 0.14,
                "y": 0.83,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "water"
                ],
                "art": "bottle-empty"
            },
            {
                "id": "umbrella",
                "label": "遮阳伞",
                "kind": "umbrella",
                "x": 0.38,
                "y": 0.84,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "shade"
                ],
                "art": "umbrella"
            },
            {
                "id": "fan",
                "label": "小风扇",
                "kind": "fan",
                "x": 0.63,
                "y": 0.84,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "mount"
                ],
                "art": "fan"
            },
            {
                "id": "base",
                "label": "风扇底座",
                "kind": "stand",
                "x": 0.5,
                "y": 0.68,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "mount"
                ],
                "art": "stand"
            },
            {
                "id": "mounted",
                "label": "装好的风扇",
                "kind": "fan",
                "x": 0.5,
                "y": 0.68,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "mount"
                ],
                "art": "fan"
            },
            {
                "id": "awning",
                "label": "遮阳棚拉绳",
                "kind": "rope",
                "x": 0.17,
                "y": 0.2,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "awning"
                ],
                "art": "rope"
            },
            {
                "id": "towel",
                "label": "冰凉小毛巾",
                "kind": "cloth",
                "x": 0.85,
                "y": 0.83,
                "w": 0.17,
                "h": 0.17,
                "visibleWhen": [
                    "breeze"
                ],
                "hiddenWhen": [
                    "towel"
                ],
                "art": "cloth"
            }
        ],
        "steps": [
            {
                "id": "awning",
                "source": "awning",
                "action": "swipe",
                "requires": [],
                "feedback": "遮阳棚拉开，补水区不再被暴晒。",
                "hints": [
                    "先让大家有共同的阴凉处。",
                    "把遮阳棚的拉绳往下拉。",
                    "向下滑动遮阳棚拉绳。"
                ],
                "direction": "down"
            },
            {
                "id": "water",
                "source": "water",
                "action": "drag",
                "target": "orange",
                "requires": [
                    "awning"
                ],
                "feedback": "橘猫喝下清凉水，不再口渴地舔嘴巴。",
                "hints": [
                    "谁的嘴巴干干的？",
                    "给刚跑步的橘猫补水。",
                    "把饮用水拖给橘猫。"
                ]
            },
            {
                "id": "shade",
                "source": "umbrella",
                "action": "drag",
                "target": "gray",
                "requires": [],
                "feedback": "遮阳伞挡住直射阳光，灰猫放松地睁开了眼。",
                "hints": [
                    "灰猫的不适只出现在日晒处。",
                    "为它挡住太阳。",
                    "把遮阳伞拖到灰猫旁边。"
                ]
            },
            {
                "id": "mount",
                "source": "fan",
                "action": "drag",
                "target": "base",
                "requires": [],
                "feedback": "风扇装进底座，可以安全稳定地送风。",
                "hints": [
                    "白猫旁边还没有能工作的风扇。",
                    "先把风扇固定在底座上。",
                    "把小风扇拖到风扇底座。"
                ]
            },
            {
                "id": "breeze",
                "source": "mounted",
                "action": "hold",
                "requires": [
                    "mount"
                ],
                "feedback": "风扇稳定送风，白猫终于凉快下来。",
                "hints": [
                    "风扇装好了还没有启动。",
                    "稳定开启小风扇。",
                    "按住装好的风扇约一秒。"
                ],
                "durationMs": 1000
            },
            {
                "id": "towel",
                "source": "towel",
                "action": "drag",
                "target": "orange-cool",
                "requires": [
                    "water",
                    "breeze"
                ],
                "feedback": "小毛巾擦去跑步后的汗，橘猫也恢复了精神。",
                "hints": [
                    "喝过水的跑步猫还满头是汗。",
                    "最后用小毛巾帮它擦汗。",
                    "把冰凉小毛巾拖给喝过水的橘猫。"
                ]
            }
        ],
        "ending": "三位伙伴的需要都得到照顾，海边庆典重新热闹起来。"
    }),
    make({
        "id": 53,
        "title": "纸环找漏水",
        "category": "调查",
        "background": "workshop",
        "story": "三节水管外面都湿了，水会沿管子流，湿处未必就是漏口。先擦干，再分别包上吸水纸。",
        "goal": "确定真正漏口并修好接头",
        "objects": [
            {
                "id": "valve",
                "label": "测试水阀",
                "kind": "button",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "cloth",
                "label": "干抹布",
                "kind": "cloth",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "dry"
                ]
            },
            {
                "id": "pipe",
                "label": "潮湿水管",
                "kind": "rod",
                "x": 0.5,
                "y": 0.48,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "dry"
                ]
            },
            {
                "id": "dry-pipe",
                "label": "干燥三接头",
                "kind": "rod",
                "x": 0.5,
                "y": 0.48,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "dry"
                ],
                "hiddenWhen": [
                    "wrap"
                ]
            },
            {
                "id": "paper",
                "label": "三只吸水环",
                "kind": "paper",
                "x": 0.8,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "wrap"
                ]
            },
            {
                "id": "rings",
                "label": "包好的接头",
                "kind": "rod",
                "x": 0.5,
                "y": 0.48,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "wrap"
                ],
                "hiddenWhen": [
                    "test"
                ]
            },
            {
                "id": "leak",
                "label": "乙接头湿环",
                "kind": "water",
                "x": 0.5,
                "y": 0.48,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "test"
                ],
                "hiddenWhen": [
                    "seal"
                ]
            },
            {
                "id": "seal",
                "label": "防水接头套",
                "kind": "box",
                "x": 0.8,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            }
        ],
        "steps": [
            {
                "id": "shut",
                "source": "valve",
                "action": "swipe",
                "requires": [],
                "feedback": "供水阀关闭，水管表面不再不断变湿。",
                "hints": [
                    "水一直流，擦干也会马上湿。",
                    "先关闭阀门。",
                    "向左滑动供水阀。"
                ],
                "direction": "left"
            },
            {
                "id": "dry",
                "source": "cloth",
                "action": "drag",
                "target": "pipe",
                "requires": [
                    "shut"
                ],
                "feedback": "擦去旧水，三个接头都回到干燥起点，不会把流下来的水误当漏口。",
                "hints": [
                    "旧水可能沿管子流过。",
                    "先把旧湿痕清除。",
                    "把干抹布拖到潮湿水管。"
                ]
            },
            {
                "id": "wrap",
                "source": "paper",
                "action": "drag",
                "target": "dry-pipe",
                "requires": [
                    "dry"
                ],
                "feedback": "甲乙丙各包一只独立纸环，新水从哪一处先出现就能看清。",
                "hints": [
                    "怎样分别记录三个位置的新水？",
                    "每个接头各放一个吸水纸环。",
                    "把三只吸水环拖到干燥三接头。"
                ]
            },
            {
                "id": "test",
                "source": "valve",
                "action": "tap",
                "requires": [
                    "wrap"
                ],
                "feedback": "短暂开水测试后自动关阀，只有乙纸环从里面变湿，漏口确定了。",
                "hints": [
                    "独立记录准备好后再通水。",
                    "找由内向外先湿的那个环。",
                    "点击测试水阀。"
                ]
            },
            {
                "id": "seal",
                "source": "seal",
                "action": "drag",
                "target": "leak",
                "requires": [
                    "test"
                ],
                "feedback": "防水套装到乙接头，复测时三只纸环都保持干燥。",
                "hints": [
                    "修的是源头，不能只擦末端。",
                    "真正漏口在乙接头。",
                    "把防水接头套拖到乙接头湿环。"
                ]
            },
            {
                "id": "reopen",
                "source": "valve",
                "action": "swipe",
                "requires": [
                    "seal"
                ],
                "feedback": "阀门重新打开，纸环保持干燥，漏点已经修好。",
                "hints": [
                    "补好后还需要通水检验。",
                    "重新开启供水。",
                    "向右滑动供水阀。"
                ],
                "direction": "right"
            }
        ],
        "ending": "漏水被准确找到，温室不再浪费清水。",
        "mechanism": "先隔水再显漏与复测",
        "legacyInspiration": "旧第13/42关：先控制来源，再处理痕迹，最后确认恢复",
        "timeLimitSeconds": 270,
        "sceneCaption": "三节水管外面都湿了，水会沿管子流，湿处未必就是漏口。"
    }),
    make({
        "id": 54,
        "title": "高处水箱的余水",
        "category": "水流",
        "background": "sunroom",
        "story": "高处水箱的底阀卡住了。透明软管和手动引水球可以把余水送进更低的收集桶。",
        "goal": "建立连续水路，把余水收好",
        "objects": [
            {
                "id": "card",
                "label": "引水说明卡",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "软管入口浸水，出口低于水面；手动球先排出管内空气，出口接到低桶。"
            },
            {
                "id": "hose",
                "label": "透明软管",
                "kind": "rope",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "inlet"
                ]
            },
            {
                "id": "tank",
                "label": "高处水箱",
                "kind": "water",
                "x": 0.5,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "outlet",
                "label": "软管出口",
                "kind": "rope",
                "x": 0.8,
                "y": 0.48,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "inlet"
                ],
                "hiddenWhen": [
                    "lower"
                ]
            },
            {
                "id": "bucket",
                "label": "低位水桶",
                "kind": "bowl",
                "x": 0.8,
                "y": 0.78,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "flow"
                ]
            },
            {
                "id": "pump",
                "label": "手动引水球",
                "kind": "button",
                "x": 0.5,
                "y": 0.72,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "full",
                "label": "接水的低桶",
                "kind": "bowl",
                "x": 0.8,
                "y": 0.78,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "flow"
                ]
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "card",
                "action": "tap",
                "requires": [],
                "feedback": "说明卡要求入口浸水、出口更低，并先用手动球排出管内空气。",
                "hints": [
                    "水要流往更高还是更低的地方？",
                    "还需要让软管内部先充满水。",
                    "点击引水说明卡。"
                ]
            },
            {
                "id": "inlet",
                "source": "hose",
                "action": "drag",
                "target": "tank",
                "requires": [
                    "read"
                ],
                "feedback": "软管入口放进水面以下，不会只吸到空气。",
                "hints": [
                    "先保证入口确实接触余水。",
                    "入口应该浸在水面下。",
                    "把透明软管拖到高处水箱。"
                ]
            },
            {
                "id": "prime",
                "source": "pump",
                "action": "hold",
                "requires": [
                    "inlet"
                ],
                "feedback": "软管里的空气被排出，管内形成连续水柱。",
                "hints": [
                    "软管里还有空气，水路不连续。",
                    "先把软管灌满水。",
                    "按住引水泵约一秒。"
                ],
                "durationMs": 1100
            },
            {
                "id": "lower",
                "source": "outlet",
                "action": "drag",
                "target": "bucket",
                "requires": [
                    "inlet",
                    "prime"
                ],
                "feedback": "软管出口固定到低位桶，位置低于上方水面。",
                "hints": [
                    "让出口比水面更低。",
                    "低桶是合适的收集位置。",
                    "把软管出口拖到低位水桶。"
                ]
            },
            {
                "id": "flow",
                "source": "pump",
                "action": "hold",
                "requires": [
                    "lower"
                ],
                "feedback": "手动球排出空气，透明软管形成连续水路，余水流进低桶。",
                "hints": [
                    "出口已经低于水箱水面。",
                    "保持水路连续观察流向。",
                    "按住引水泵约一秒。"
                ],
                "durationMs": 1000
            }
        ],
        "ending": "不用拆开卡住的底阀，余水也被完整回收。",
        "mechanism": "虹吸高度与连续水路",
        "legacyInspiration": "旧第42关：调整环境位置比反复按按钮更重要",
        "timeLimitSeconds": 250,
        "sceneCaption": "高处水箱的底阀卡住了。"
    }),
    make({
        "id": 55,
        "title": "推不动的木箱",
        "category": "移动",
        "background": "workshop",
        "story": "木箱拖在石地上很费力，旁边放着短圆木和标了平整路线的搬运图。",
        "goal": "用滚动搬运木箱到卸货位",
        "objects": [
            {
                "id": "route",
                "label": "搬运路线图",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "沿平整路线搬运；先用安全支点略抬箱，再垫圆木，用滚动代替硬拖。"
            },
            {
                "id": "jack",
                "label": "手动起箱器",
                "kind": "rod",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "lift"
                ]
            },
            {
                "id": "crate",
                "label": "沉重木箱",
                "kind": "box",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "lift"
                ],
                "description": "箱底与地面直接摩擦，先垫入圆木再推动。"
            },
            {
                "id": "raised",
                "label": "略抬的木箱",
                "kind": "box",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "lift"
                ],
                "hiddenWhen": [
                    "rollers"
                ]
            },
            {
                "id": "logs",
                "label": "短圆木组",
                "kind": "rod",
                "x": 0.8,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "rollers"
                ]
            },
            {
                "id": "rolling",
                "label": "圆木上的箱",
                "kind": "box",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "rollers"
                ],
                "hiddenWhen": [
                    "move"
                ]
            },
            {
                "id": "goal",
                "label": "平整卸货位",
                "kind": "stand",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "track-dust",
                "label": "滚动路线碎石",
                "kind": "stone",
                "x": 0.8,
                "y": 0.28,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "rollers"
                ],
                "hiddenWhen": [
                    "track-dust"
                ],
                "art": "stone",
                "description": "碎石拨到路线外，滚木不会在途中被卡住。"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "route",
                "action": "tap",
                "requires": [],
                "feedback": "路线图要求先略抬、垫圆木，再沿平整面滚动搬运。",
                "hints": [
                    "硬拖之外还有哪一种接触方式？",
                    "圆木能让滑动变成滚动。",
                    "点击搬运路线图。"
                ]
            },
            {
                "id": "lift",
                "source": "jack",
                "action": "drag",
                "target": "crate",
                "requires": [
                    "read"
                ],
                "feedback": "起箱器沿安全支点略抬木箱，留出垫木空间。",
                "hints": [
                    "圆木暂时塞不进箱底。",
                    "先用专用起箱器留出空隙。",
                    "把手动起箱器拖到沉重木箱。"
                ]
            },
            {
                "id": "rollers",
                "source": "logs",
                "action": "drag",
                "target": "raised",
                "requires": [
                    "lift"
                ],
                "feedback": "短圆木垫入箱底，箱子不再直接拖着地面。",
                "hints": [
                    "让箱底接触能够滚动的东西。",
                    "圆木组放到抬起的空隙。",
                    "把短圆木组拖到略抬的木箱。"
                ]
            },
            {
                "id": "track-dust",
                "source": "track-dust",
                "action": "swipe",
                "requires": [
                    "rollers"
                ],
                "feedback": "碎石拨到路线外，滚木不会在途中被卡住。",
                "hints": [
                    "滚动通路上还有凸起碎石。",
                    "把碎石往右拨开。",
                    "向右滑动路线碎石。"
                ],
                "direction": "right"
            },
            {
                "id": "move",
                "source": "rolling",
                "action": "drag",
                "target": "goal",
                "requires": [
                    "rollers",
                    "track-dust"
                ],
                "feedback": "木箱沿平整路线滚到卸货位，搬运变轻松了。",
                "hints": [
                    "箱子已经有滚动支撑。",
                    "沿图上的平整路线到达卸货位。",
                    "把圆木上的箱拖到平整卸货位。"
                ]
            }
        ],
        "ending": "搬运队收好圆木，再也不拿地面和箱底较劲。",
        "mechanism": "杠杆抬升与滚动搬运",
        "legacyInspiration": "旧第1/22关：改变受力条件，而不是反复硬推",
        "timeLimitSeconds": 250,
        "sceneCaption": "木箱拖在石地上很费力，旁边放着短圆木和标了平整路线的搬运图。"
    }),
    make({
        "id": 56,
        "title": "手摇甩干篮",
        "category": "旋转",
        "background": "kitchen",
        "story": "洗好的菜叶带着水珠。沥水篮能手摇旋转，但篮架还没固定，接水盆也没放好。",
        "goal": "固定装置，把菜叶上的水收进盆里",
        "objects": [
            {
                "id": "base",
                "label": "摇篮固定座",
                "kind": "stand",
                "x": 0.5,
                "y": 0.72,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "clamp",
                "label": "固定扣",
                "kind": "button",
                "x": 0.2,
                "y": 0.74,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "fix"
                ]
            },
            {
                "id": "bowl",
                "label": "接水盆",
                "kind": "bowl",
                "x": 0.8,
                "y": 0.76,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "catch"
                ]
            },
            {
                "id": "under",
                "label": "篮下空位",
                "kind": "stand",
                "x": 0.5,
                "y": 0.49,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "catch"
                ]
            },
            {
                "id": "leaves",
                "label": "湿菜叶",
                "kind": "plant",
                "x": 0.2,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "load"
                ]
            },
            {
                "id": "basket",
                "label": "网孔篮",
                "kind": "bowl",
                "x": 0.8,
                "y": 0.29,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "handle",
                "label": "手摇柄",
                "kind": "rod",
                "x": 0.8,
                "y": 0.51,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "dry",
                "label": "沥干菜叶",
                "kind": "plant",
                "x": 0.5,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "spin"
                ]
            },
            {
                "id": "basket-grit",
                "label": "篮内灰尘",
                "kind": "dust",
                "x": 0.8,
                "y": 0.29,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "fix",
                    "catch"
                ],
                "hiddenWhen": [
                    "basket-grit"
                ],
                "art": "dust",
                "description": "筛篮擦净，不会把灰尘甩到新鲜叶片上。"
            }
        ],
        "steps": [
            {
                "id": "fix",
                "source": "clamp",
                "action": "drag",
                "target": "base",
                "requires": [],
                "feedback": "固定扣锁好篮架，旋转时底座不会跟着移动。",
                "hints": [
                    "旋转前先防止整个装置移动。",
                    "底座上留着固定扣的位置。",
                    "把固定扣拖到摇篮固定座。"
                ]
            },
            {
                "id": "catch",
                "source": "bowl",
                "action": "drag",
                "target": "under",
                "requires": [],
                "feedback": "接水盆放在篮下，甩出的水有了收集位置。",
                "hints": [
                    "飞离菜叶的水要落在哪里？",
                    "网孔篮下需要接水盆。",
                    "把接水盆拖到篮下空位。"
                ]
            },
            {
                "id": "basket-grit",
                "source": "basket-grit",
                "action": "scrub",
                "requires": [
                    "fix",
                    "catch"
                ],
                "feedback": "筛篮擦净，不会把灰尘甩到新鲜叶片上。",
                "hints": [
                    "装叶片之前先检查篮子。",
                    "把篮内灰尘清理干净。",
                    "在筛篮里的灰尘上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "load",
                "source": "leaves",
                "action": "drag",
                "target": "basket",
                "requires": [
                    "fix",
                    "catch",
                    "basket-grit"
                ],
                "feedback": "菜叶放进网孔篮，网孔让水离开但留住菜叶。",
                "hints": [
                    "分离菜和水需要有孔的容器。",
                    "菜叶放进网孔篮。",
                    "把湿菜叶拖到网孔篮。"
                ]
            },
            {
                "id": "spin",
                "source": "handle",
                "action": "hold",
                "requires": [
                    "load"
                ],
                "feedback": "缓慢摇动后停下，水穿过网孔进盆，菜叶留在篮内。",
                "hints": [
                    "底座和接水盆都准备好。",
                    "持续摇动，水才会甩向外壁。",
                    "按住手摇柄约一秒。"
                ],
                "durationMs": 1200
            }
        ],
        "ending": "小猫做了一盘干爽的沙拉，接下的水还可以浇花。",
        "mechanism": "固定、接水与离心甩干",
        "legacyInspiration": "旧第2关：各个准备条件汇合后才进入工作阶段",
        "timeLimitSeconds": 250,
        "sceneCaption": "洗好的菜叶带着水珠。"
    }),
    make({
        "id": 57,
        "title": "凉得太快的茶",
        "category": "隔热",
        "background": "kitchen",
        "story": "茶杯放在冰凉的金属台上，很快就凉了。猫奶奶想用木垫和杯套减慢散热。",
        "goal": "同时减少杯底和杯壁散热",
        "objects": [
            {
                "id": "note",
                "label": "保温便签",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "木垫减少杯底向冷金属传热，杯套减少杯壁散热；两处都要处理。"
            },
            {
                "id": "cup",
                "label": "金属台茶杯",
                "kind": "bottle",
                "x": 0.5,
                "y": 0.46,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "mat"
                ]
            },
            {
                "id": "mat",
                "label": "干燥木垫",
                "kind": "stand",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "mat"
                ]
            },
            {
                "id": "cup-mat",
                "label": "垫好的茶杯",
                "kind": "bottle",
                "x": 0.5,
                "y": 0.46,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "mat"
                ],
                "hiddenWhen": [
                    "sleeve"
                ]
            },
            {
                "id": "sleeve",
                "label": "保温杯套",
                "kind": "cloth",
                "x": 0.8,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "sleeve"
                ]
            },
            {
                "id": "wrapped",
                "label": "隔热茶杯",
                "kind": "bottle",
                "x": 0.5,
                "y": 0.46,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "sleeve"
                ]
            },
            {
                "id": "test",
                "label": "短时温度条",
                "kind": "paper",
                "x": 0.8,
                "y": 0.28,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "lid",
                "label": "保温杯盖",
                "kind": "cover",
                "x": 0.5,
                "y": 0.25,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "lid"
                ],
                "art": "cover"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "note",
                "action": "tap",
                "requires": [],
                "feedback": "便签画了两条散热路径：杯底到冷台面，杯壁到周围空气。",
                "hints": [
                    "热量只有一条离开路线吗？",
                    "杯底和杯壁都需要考虑。",
                    "点击保温便签。"
                ]
            },
            {
                "id": "mat",
                "source": "mat",
                "action": "drag",
                "target": "cup",
                "requires": [
                    "read"
                ],
                "feedback": "木垫隔开茶杯和冷金属，杯底传热减慢。",
                "hints": [
                    "先隔开最冷的接触面。",
                    "木垫放到茶杯下方。",
                    "把干燥木垫拖到金属台茶杯。"
                ]
            },
            {
                "id": "sleeve",
                "source": "sleeve",
                "action": "drag",
                "target": "cup-mat",
                "requires": [
                    "mat"
                ],
                "feedback": "杯套包住杯壁，另一条散热路径也得到减缓。",
                "hints": [
                    "杯底处理好了，杯壁呢？",
                    "杯套能覆盖外侧杯壁。",
                    "把保温杯套拖到垫好的茶杯。"
                ]
            },
            {
                "id": "lid",
                "source": "lid",
                "action": "drag",
                "target": "wrapped",
                "requires": [
                    "sleeve"
                ],
                "feedback": "杯盖盖好，热气不再从杯口大量散走。",
                "hints": [
                    "杯垫和杯套只挡住底部、侧面。",
                    "杯口也是散热通路。",
                    "把保温杯盖拖到包好杯套的茶杯。"
                ]
            },
            {
                "id": "test",
                "source": "test",
                "action": "hold",
                "requires": [
                    "sleeve",
                    "lid"
                ],
                "feedback": "短时温度条显示，隔热杯比原先降温更慢。",
                "hints": [
                    "三条散热路径都处理好了。",
                    "观察温度是否下降更慢。",
                    "按住测温位置约一秒。"
                ],
                "durationMs": 1100
            }
        ],
        "ending": "猫奶奶喝上温茶，也把两条散热路径画给了小猫看。",
        "mechanism": "不同散热路径分别保温",
        "legacyInspiration": "旧第41/42关：对不同散热或受热部位采取不同方法",
        "timeLimitSeconds": 250,
        "sceneCaption": "茶杯放在冰凉的金属台上，很快就凉了。"
    }),
    make({
        "id": 58,
        "title": "谁是真正的夜班邮差",
        "category": "推理",
        "background": "market",
        "mechanism": "工具反应与角色排除",
        "legacyInspiration": "旧第21关：给不同角色施加可解释的检查，逐项排除身份",
        "sceneCaption": "三位来访者都拿着袋子，真正邮差应有猫爪邮戳和两封待投信。",
        "story": "夜班邮车到了，三位戴帽子的访客都说自己来取信。先看清他们真正携带的东西，再把待投信交给合适的人。",
        "goal": "排除两位访客，将两封信交给真正邮差",
        "timeLimitSeconds": 300,
        "objects": [
            {
                "id": "badge",
                "label": "邮差徽章样本",
                "kind": "clue",
                "x": 0.5,
                "y": 0.17,
                "w": 0.17,
                "h": 0.17,
                "art": "paw-seal",
                "description": "值班邮差的徽章是猫爪邮戳，袋里放的是信件，不是工具或食物。"
            },
            {
                "id": "orange",
                "label": "灰衣来访者",
                "kind": "person",
                "x": 0.18,
                "y": 0.45,
                "w": 0.24,
                "h": 0.3,
                "hiddenWhen": [
                    "dust"
                ],
                "art": "fox-visitor",
                "description": "围裙上的灰盖住了店铺图案。"
            },
            {
                "id": "fisher",
                "label": "鱼铺帮工",
                "kind": "person",
                "x": 0.18,
                "y": 0.45,
                "w": 0.24,
                "h": 0.3,
                "visibleWhen": [
                    "dust"
                ],
                "art": "fox-visitor"
            },
            {
                "id": "gray",
                "label": "高帽来访者",
                "kind": "person",
                "x": 0.5,
                "y": 0.45,
                "w": 0.24,
                "h": 0.3,
                "hiddenWhen": [
                    "hat"
                ],
                "art": "cat-neighbor",
                "description": "高帽子下面露着白色面粉。"
            },
            {
                "id": "baker",
                "label": "面包师傅",
                "kind": "person",
                "x": 0.5,
                "y": 0.45,
                "w": 0.24,
                "h": 0.3,
                "visibleWhen": [
                    "hat"
                ],
                "art": "cat-baker"
            },
            {
                "id": "postman",
                "label": "背包来访者",
                "kind": "person",
                "x": 0.81,
                "y": 0.45,
                "w": 0.24,
                "h": 0.3,
                "art": "rabbit-postman",
                "description": "它的背包里有整齐纸角，胸前徽章太小看不清。"
            },
            {
                "id": "glass",
                "label": "放大镜",
                "kind": "magnifier",
                "x": 0.18,
                "y": 0.83,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "stamp"
                ],
                "art": "magnifier"
            },
            {
                "id": "bag",
                "label": "来访者的信包",
                "kind": "bag",
                "x": 0.8,
                "y": 0.74,
                "w": 0.17,
                "h": 0.17,
                "art": "handbag"
            },
            {
                "id": "letter-a",
                "label": "第一封待投信",
                "kind": "letter",
                "x": 0.42,
                "y": 0.84,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "letter-a"
                ],
                "art": "envelope"
            },
            {
                "id": "letter-b",
                "label": "第二封待投信",
                "kind": "letter",
                "x": 0.64,
                "y": 0.84,
                "w": 0.17,
                "h": 0.17,
                "hiddenWhen": [
                    "letter-b"
                ],
                "art": "letter-open"
            }
        ],
        "steps": [
            {
                "id": "sample",
                "source": "badge",
                "action": "tap",
                "requires": [],
                "feedback": "猫爪邮戳和真正的信件，才是值班身份的两项依据。",
                "hints": [
                    "先确定应该核对的标准。",
                    "墙上有值班徽章样本。",
                    "点击猫爪徽章样本。"
                ]
            },
            {
                "id": "dust",
                "source": "orange",
                "action": "scrub",
                "requires": [
                    "sample"
                ],
                "feedback": "擦去围裙上的灰，露出鱼铺标志；这位是鱼铺帮工。",
                "hints": [
                    "先看看围裙上被盖住的标志。",
                    "擦净表面，别只凭他说的话。",
                    "在左侧访客的围裙上来回擦拭。"
                ],
                "minDistance": 0.45
            },
            {
                "id": "hat",
                "source": "gray",
                "action": "swipe",
                "requires": [
                    "sample"
                ],
                "feedback": "高帽向上一掀，白色厨师帽露出；这位是面包师。",
                "hints": [
                    "中间访客的帽檐下露着面粉。",
                    "把外帽向上掀开。",
                    "向上滑动中间访客的高帽。"
                ],
                "direction": "up"
            },
            {
                "id": "stamp",
                "source": "glass",
                "action": "drag",
                "target": "postman",
                "requires": [
                    "sample"
                ],
                "feedback": "放大镜看清猫爪邮戳，和样本完全一致。",
                "hints": [
                    "右侧访客的徽章很小。",
                    "用放大镜核对真实印记。",
                    "把放大镜拖到右侧背包访客。"
                ]
            },
            {
                "id": "bag",
                "source": "bag",
                "action": "hold",
                "requires": [
                    "stamp"
                ],
                "feedback": "包里有信件纸张的边角和待投标记，并没有鱼或面包。",
                "hints": [
                    "徽章相符，还要核对随身物。",
                    "稳住信包查看内容。",
                    "按住右侧信包约一秒。"
                ],
                "durationMs": 1000
            },
            {
                "id": "letter-a",
                "source": "letter-a",
                "action": "drag",
                "target": "bag",
                "requires": [
                    "dust",
                    "hat",
                    "bag"
                ],
                "feedback": "第一封信交进真正的夜班邮包。",
                "hints": [
                    "两位其他职业已排除。",
                    "把待投信交给猫爪邮戳的邮差。",
                    "把第一封待投信拖到右侧信包。"
                ]
            },
            {
                "id": "letter-b",
                "source": "letter-b",
                "action": "drag",
                "target": "bag",
                "requires": [
                    "dust",
                    "hat",
                    "bag"
                ],
                "feedback": "第二封信也装好，夜班邮差顺利接班。",
                "hints": [
                    "还有一封信需要装入。",
                    "仍交给已经核实的同一邮差。",
                    "把第二封待投信拖到右侧信包。"
                ]
            }
        ],
        "ending": "鱼铺帮工和面包师各自回店，真正的邮差带着信件开始夜间投递。"
    }),
    make({
        "id": 59,
        "title": "空转的皮带轮",
        "category": "摩擦",
        "background": "workshop",
        "story": "小钟的电机在转，指针却没动。传动皮带松得贴不住轮面，旁边有可调的张紧轮。",
        "goal": "停止驱动，张紧皮带后试转",
        "objects": [
            {
                "id": "diagram",
                "label": "皮带示意图",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "松皮带会打滑。断电后让张紧轮顶住松边，再手动检查，不要碰正在转的轮子。"
            },
            {
                "id": "power",
                "label": "停机手柄",
                "kind": "button",
                "x": 0.8,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "tension",
                "label": "张紧小轮",
                "kind": "gear",
                "x": 0.2,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "tension"
                ]
            },
            {
                "id": "slack",
                "label": "松边支架",
                "kind": "stand",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "tension"
                ]
            },
            {
                "id": "tight",
                "label": "张紧传动组",
                "kind": "gear",
                "x": 0.5,
                "y": 0.5,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "tension"
                ]
            },
            {
                "id": "hand",
                "label": "手动检查柄",
                "kind": "rod",
                "x": 0.8,
                "y": 0.75,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "clock",
                "label": "走动的小钟",
                "kind": "clock",
                "x": 0.5,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "test"
                ]
            },
            {
                "id": "belt-grease",
                "label": "轮缘油污",
                "kind": "dust",
                "x": 0.5,
                "y": 0.5,
                "w": 0.19,
                "h": 0.19,
                "visibleWhen": [
                    "stop"
                ],
                "hiddenWhen": [
                    "belt-grease",
                    "tension"
                ],
                "art": "dust",
                "description": "停机后擦净轮缘油污，皮带才不会继续打滑。"
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "diagram",
                "action": "tap",
                "requires": [],
                "feedback": "示意图说明动力靠皮带与轮面的接触传递，松边会滑动。",
                "hints": [
                    "电机在转，动力在哪里断开？",
                    "查看皮带与轮面的接触。",
                    "点击皮带示意图。"
                ]
            },
            {
                "id": "stop",
                "source": "power",
                "action": "tap",
                "requires": [
                    "read"
                ],
                "feedback": "驱动停止，现在可以安全调整皮带。",
                "hints": [
                    "调整传动前先停机。",
                    "停机手柄就在右上方。",
                    "点击停机手柄。"
                ]
            },
            {
                "id": "belt-grease",
                "source": "belt-grease",
                "action": "scrub",
                "requires": [
                    "stop"
                ],
                "feedback": "停机后擦净轮缘油污，皮带才不会继续打滑。",
                "hints": [
                    "太滑的轮缘也传不动力。",
                    "停机后擦去多余油污。",
                    "在轮缘油污上来回擦拭。"
                ],
                "minDistance": 0.4
            },
            {
                "id": "tension",
                "source": "tension",
                "action": "drag",
                "target": "slack",
                "requires": [
                    "stop",
                    "belt-grease"
                ],
                "feedback": "张紧轮顶住松边，皮带贴紧轮面。",
                "hints": [
                    "让松掉的一边恢复接触。",
                    "小轮对应松边支架的位置。",
                    "把张紧小轮拖到松边支架。"
                ]
            },
            {
                "id": "test",
                "source": "hand",
                "action": "hold",
                "requires": [
                    "tension"
                ],
                "feedback": "手动试转，皮带带动输出轮，小钟的指针开始移动。",
                "hints": [
                    "皮带张紧且轮缘干净。",
                    "持续转动手轮观察传动。",
                    "按住手轮约一秒。"
                ],
                "durationMs": 1100
            }
        ],
        "ending": "钟表工给张紧轮加上检查标记，小钟重新报时。",
        "mechanism": "松紧调整与摩擦传动",
        "legacyInspiration": "旧第2关：观察运转前后状态，定位真正松动处",
        "timeLimitSeconds": 250,
        "sceneCaption": "小钟的电机在转，指针却没动。"
    }),
    make({
        "id": 60,
        "title": "两位保管人的许可",
        "category": "综合",
        "background": "office",
        "story": "公共档案柜需要管理员和委托人各自许可。柜门写着“两枚印章缺一不可”，两份文件分放在不同信封里。",
        "goal": "分别取得两枚许可，再开启公共档案",
        "objects": [
            {
                "id": "rule",
                "label": "双重许可牌",
                "kind": "paper",
                "x": 0.2,
                "y": 0.25,
                "w": 0.15,
                "h": 0.15,
                "description": "管理员印证明档案可公开，委托人印证明本人同意；一种许可不能代替另一种。"
            },
            {
                "id": "left",
                "label": "管理信封",
                "kind": "paper",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "admin"
                ]
            },
            {
                "id": "right",
                "label": "委托信封",
                "kind": "paper",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "hiddenWhen": [
                    "client"
                ]
            },
            {
                "id": "admin",
                "label": "管理许可印",
                "kind": "clue",
                "x": 0.2,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "admin"
                ],
                "hiddenWhen": [
                    "stamp-a"
                ]
            },
            {
                "id": "client",
                "label": "委托许可印",
                "kind": "clue",
                "x": 0.8,
                "y": 0.52,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "client"
                ],
                "hiddenWhen": [
                    "stamp-b"
                ]
            },
            {
                "id": "a-slot",
                "label": "管理印槽",
                "kind": "button",
                "x": 0.35,
                "y": 0.77,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "b-slot",
                "label": "委托印槽",
                "kind": "button",
                "x": 0.65,
                "y": 0.77,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "handle",
                "label": "档案柜把手",
                "kind": "button",
                "x": 0.5,
                "y": 0.3,
                "w": 0.15,
                "h": 0.15
            },
            {
                "id": "file",
                "label": "公开档案",
                "kind": "book",
                "x": 0.5,
                "y": 0.53,
                "w": 0.15,
                "h": 0.15,
                "visibleWhen": [
                    "open"
                ]
            }
        ],
        "steps": [
            {
                "id": "read",
                "source": "rule",
                "action": "tap",
                "requires": [],
                "feedback": "许可牌区分两种权限：可公开与本人同意，两个条件都必须成立。",
                "hints": [
                    "柜门为什么有两个不同印槽？",
                    "两种许可证明的是不同条件。",
                    "点击双重许可牌。"
                ]
            },
            {
                "id": "admin",
                "source": "left",
                "action": "swipe",
                "requires": [],
                "feedback": "管理员信封内有“可公开”许可印，对应管理印槽。",
                "hints": [
                    "左侧管理员凭证盒盖着。",
                    "先打开盒盖取凭证。",
                    "向上滑动左侧凭证盒。"
                ],
                "direction": "up"
            },
            {
                "id": "client",
                "source": "right",
                "action": "swipe",
                "requires": [],
                "feedback": "委托信封内有“本人同意”许可印，对应委托印槽。",
                "hints": [
                    "右侧委托凭证夹着。",
                    "沿夹口向下抽出。",
                    "向下滑动右侧凭证夹。"
                ],
                "direction": "down"
            },
            {
                "id": "stamp-a",
                "source": "admin",
                "action": "drag",
                "target": "a-slot",
                "requires": [
                    "read",
                    "admin"
                ],
                "feedback": "管理许可核实成功：该档案可以公开。",
                "hints": [
                    "把可公开许可放到同类印槽。",
                    "管理员许可不能放进委托印槽。",
                    "把管理许可印拖到管理印槽。"
                ]
            },
            {
                "id": "stamp-b",
                "source": "client",
                "action": "drag",
                "target": "b-slot",
                "requires": [
                    "read",
                    "client"
                ],
                "feedback": "委托许可核实成功：本人同意调阅。",
                "hints": [
                    "第二种条件也必须独立满足。",
                    "本人同意对应委托印槽。",
                    "把委托许可印拖到委托印槽。"
                ]
            },
            {
                "id": "open",
                "source": "handle",
                "action": "hold",
                "requires": [
                    "stamp-a",
                    "stamp-b"
                ],
                "feedback": "两枚许可同时齐备，档案柜解锁。",
                "hints": [
                    "两份许可都已对应各自槽位。",
                    "稳住保险把手才能同时接通两道条件。",
                    "按住保险把手约一秒。"
                ],
                "durationMs": 1000
            }
        ],
        "ending": "档案按双方许可公开。猫咪侦探社又学会了尊重每一份委托。",
        "mechanism": "双人许可与并行凭证",
        "legacyInspiration": "旧第30关：两道独立条件都满足才可开锁",
        "timeLimitSeconds": 270,
        "sceneCaption": "公共档案柜需要管理员和委托人各自许可。"
    })
];
