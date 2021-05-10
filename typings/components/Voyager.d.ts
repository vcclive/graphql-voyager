import { SVGRender } from '../graph/';
import { WorkerCallback } from '../utils/types';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import GraphViewport from './GraphViewport';
import './Voyager.css';
import './viewport.css';
export interface VoyagerDisplayOptions {
    rootType?: string;
    skipRelay?: boolean;
    skipDeprecated?: boolean;
    showLeafFields?: boolean;
    sortByAlphabet?: boolean;
    hideRoot?: boolean;
}
export interface VoyagerProps {
    displayOptions?: VoyagerDisplayOptions;
    hideDocs?: boolean;
    hideSettings?: boolean;
    workerURI?: string;
    loadWorker?: WorkerCallback;
    typeGraph: any;
    children?: React.ReactNode;
}
export default class Voyager extends React.Component<VoyagerProps> {
    static propTypes: {
        displayOptions: PropTypes.Requireable<PropTypes.InferProps<{
            rootType: PropTypes.Requireable<string>;
            skipRelay: PropTypes.Requireable<boolean>;
            skipDeprecated: PropTypes.Requireable<boolean>;
            sortByAlphabet: PropTypes.Requireable<boolean>;
            hideRoot: PropTypes.Requireable<boolean>;
            showLeafFields: PropTypes.Requireable<boolean>;
        }>>;
        hideDocs: PropTypes.Requireable<boolean>;
        hideSettings: PropTypes.Requireable<boolean>;
        workerURI: PropTypes.Requireable<string>;
        loadWorker: PropTypes.Requireable<(...args: any[]) => any>;
    };
    state: {
        typeGraph: any;
        displayOptions: {
            rootType: string;
            skipRelay: boolean;
            skipDeprecated: boolean;
            sortByAlphabet: boolean;
            showLeafFields: boolean;
            hideRoot: boolean;
        };
        selectedTypeID: any;
        selectedEdgeID: any;
    };
    svgRenderer: SVGRender;
    viewportRef: React.RefObject<GraphViewport>;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: VoyagerProps): void;
    render(): JSX.Element;
    renderPanel(): JSX.Element;
    renderGraphViewport(): JSX.Element;
    handleSelectNode: (selectedTypeID: any) => void;
    handleSelectEdge: (selectedEdgeID: any) => void;
    static PanelHeader: (props: any) => any;
}
