import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const UnLockDate = () => {
  return (
    <>
      <div>
        <h2 className="text-t-20 font-bold text-center">Unlock Date</h2>
        <div className="mt-2 space-y-3 bg-[#101010] rounded-[12px] px-5 py-5">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="text-t-16 font-bold">Wed 13 Mar 2024 07:09</h4>
              <h6 className="text-t-16 font-normal">in 6 months</h6>
            </div>
            <Select>
              <SelectTrigger
                iconColor="text-skin-dark-green"
                className="w-[70px] border-none bg-transparent "
              >
                <span className="flex  een focus:outline-none ring-0 items-center gap-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={19}
                    height={21}
                    viewBox="0 0 19 21"
                    fill="none"
                  >
                    <path
                      d="M16.4844 18.9844H2.51562V8.01562H16.4844V18.9844ZM13.4844 0.984375V3H5.51562V0.984375H3.5V3H2.51562C1.95312 3 1.47656 3.19531 1.08594 3.58594C0.695313 3.97656 0.5 4.45312 0.5 5.01562V18.9844C0.5 19.5469 0.695313 20.0234 1.08594 20.4141C1.47656 20.8047 1.95312 21 2.51562 21H16.4844C17.0469 21 17.5234 20.8047 17.9141 20.4141C18.3047 20.0234 18.5 19.5469 18.5 18.9844V5.01562C18.5 4.45312 18.3047 3.97656 17.9141 3.58594C17.5234 3.19531 17.0469 3 16.4844 3H15.5V0.984375H13.4844ZM14.5156 12H9.5V17.0156H14.5156V12Z"
                      fill="#68D67C"
                    />
                  </svg>
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnLockDate;
