/// <reference path="phaser/phaser.d.ts" />
declare module Pk {
    class PkConfig {
        canvasSize: [number, number];
        canvasId: string;
        renderMode: number;
        initialState: string;
        loaderLoadingBar: string;
        loaderWaitingTime: number;
        loaderState: any;
    }
}
declare module Pk {
    module I {
        interface EventListener {
            key: string;
            callBack: Function;
            context: any;
        }
    }
    class PkEvent {
        private static id;
        private id;
        name: string;
        private listeners;
        private target;
        constructor(name: any, target: any);
        add(key: string, callBack: Function, context?: any): void;
        dispatch(key: string, ...args: any[]): void;
    }
}
declare module Pk {
    module PkTransitionAnimation {
        class Default implements Pk.I.TransitionAnimation {
            event: PkEvent;
            start(): void;
            end(): void;
        }
    }
}
declare module Pk {
    class PkTransition {
        transitionAnimation: Pk.I.TransitionAnimation;
        to: string;
        params: Array<any>;
        game: Pk.PkGame;
        clearWorld: boolean;
        clearCache: boolean;
        constructor(game: Pk.PkGame);
        change(to: string, ...args: any[]): void;
        protected endStartAnimation(e: any, ...args: any[]): void;
    }
    module E {
        const OnTransitionEndStart: string;
        const OnTransitionEndEnd: string;
    }
    module I {
        interface TransitionAnimation {
            event: PkEvent;
            start(): any;
            end(): any;
        }
    }
}
declare module Pk {
    class PkElement extends Phaser.Group {
        private static id;
        private id;
        protected tweens: Array<Phaser.Tween>;
        name: string;
        event: PkEvent;
        constructor(game: any);
        addTween(displayObject: any): Phaser.Tween;
        destroy(): void;
    }
}
declare module Pk {
    module I {
        interface LayerData {
            name: string;
            total: number;
            group: Phaser.Group;
        }
    }
    class PkState extends Phaser.State {
        transition: Pk.PkTransition;
        layers: Array<I.LayerData>;
        getGame(): Pk.PkGame;
        addLayer: (layerName: string) => void;
        addToLayer: (layerName: string, element: any) => void;
        init(...args: any[]): void;
        create(): void;
    }
}
declare module Pk {
    class PkGame extends Phaser.Game {
        static pkConfig: PkConfig;
        static game: PkGame;
        constructor(pkConfig?: PkConfig);
    }
}
declare module Pk {
    module I {
        interface Loader {
            preload(): any;
            create(): any;
        }
    }
    class PkLoader extends Pk.PkState implements Pk.I.Loader {
        init(): void;
        preload(): void;
        create(): void;
    }
}
declare module Pk {
    class PkUtils {
        static isEmpty(obj: any): boolean;
        static createSquare(game: Phaser.Game, width: number, height: number, color: any): Phaser.Sprite;
    }
}
