import { Menu, Transition } from "@headlessui/react";
import { ShoppingCartSimple } from "@/app/components/Icons";
import CartList from "./CartList";

const CartDropdown = () => {
  return (
    <div className="">
      <Menu as="div" className="relative z-10 inline-block text-left">
        {({ close }) => (
          <>
            <div>
              <Menu.Button
                onMouseEnter={(event) => event.currentTarget.click()}
              >
                <ShoppingCartSimple size={22} />
              </Menu.Button>
            </div>
            <Transition
              as="div"
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              onMouseLeave={close}
            >
              <Menu.Items className="absolute right-0 top-[-10px] mt-2 w-[300px] origin-top-right rounded-md bg-white shadow-xl focus:outline-none">
                <Menu.Item>
                  <CartList close={close} />
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default CartDropdown;
