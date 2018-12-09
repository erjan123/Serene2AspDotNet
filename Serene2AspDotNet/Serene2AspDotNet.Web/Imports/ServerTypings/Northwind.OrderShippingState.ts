namespace Serene2AspDotNet.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Serene2AspDotNet.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

