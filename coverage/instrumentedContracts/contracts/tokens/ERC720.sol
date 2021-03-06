pragma solidity >= 0.5.0;

import "../interfaces/IERC720.sol";
import "../math/SafeMath.sol";

/**
 * @dev Implementation of the `IERC20` interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using `_mint`.
 * For a generic mechanism see `ERC20Mintable`.
 *
 * *For a detailed writeup see our guide [How to implement supply
 * mechanisms](https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226).*
 *
 * We have followed general OpenZeppelin guidelines: functions revert instead
 * of returning `false` on failure. This behavior is nonetheless conventional
 * and does not conflict with the expectations of ERC20 applications.
 *
 * Additionally, an `Approval` event is emitted on calls to `transferFrom`.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard `decreaseAllowance` and `increaseAllowance`
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See `IERC20.approve`.
 */
contract ERC720 is IERC20 {
event __StatementCoverage(uint32 value);
    using SafeMath
    for uint256;

    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    constructor() public {
emit __StatementCoverage(6000001);
        _totalSupply = 18000000000000000000;
    }

    /**
     * @dev See `IERC20.totalSupply`.
     */
    function totalSupply() public  returns(uint256) {
emit __StatementCoverage(6000002);
        return _totalSupply;
    }

    /**
     * @dev See `IERC20.balanceOf`.
     */
    function balanceOf(address account) public  returns(uint256) {
emit __StatementCoverage(6000003);
        return _balances[account];
    }

    /**
     * @dev See `IERC20.transfer`.
     *
     * Requirements:
     *
     * - `recipient` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address recipient, uint256 amount) public returns(bool) {
emit __StatementCoverage(6000004);
        _transfer(msg.sender, recipient, amount);
emit __StatementCoverage(6000005);
        return true;
    }

    /**
     * @dev See `IERC20.allowance`.
     */
    function allowance(address owner, address spender) public  returns(uint256) {
emit __StatementCoverage(6000006);
        return _allowances[owner][spender];
    }

    /**
     * @dev See `IERC20.approve`.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 value) public returns(bool) {
emit __StatementCoverage(6000007);
        _approve(msg.sender, spender, value);
emit __StatementCoverage(6000008);
        return true;
    }

    /**
     * @dev See `IERC20.transferFrom`.
     *
     * Emits an `Approval` event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of `ERC20`;
     *
     * Requirements:
     * - `sender` and `recipient` cannot be the zero address.
     * - `sender` must have a balance of at least `value`.
     * - the caller must have allowance for `sender`'s tokens of at least
     * `amount`.
     */
    function transferFrom(address sender, address recipient, uint256 amount) public returns(bool) {
emit __StatementCoverage(6000009);
        _transfer(sender, recipient, amount);
emit __StatementCoverage(6000010);
        _approve(sender, msg.sender, _allowances[sender][msg.sender].sub(amount));
emit __StatementCoverage(6000011);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to `approve` that can be used as a mitigation for
     * problems described in `IERC20.approve`.
     *
     * Emits an `Approval` event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public returns(bool) {
emit __StatementCoverage(6000012);
        _approve(msg.sender, spender, _allowances[msg.sender][spender].add(addedValue));
emit __StatementCoverage(6000013);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to `approve` that can be used as a mitigation for
     * problems described in `IERC20.approve`.
     *
     * Emits an `Approval` event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public returns(bool) {
emit __StatementCoverage(6000014);
        _approve(msg.sender, spender, _allowances[msg.sender][spender].sub(subtractedValue));
emit __StatementCoverage(6000015);
        return true;
    }

    /**
     * @dev Moves tokens `amount` from `sender` to `recipient`.
     *
     * This is internal function is equivalent to `transfer`, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a `Transfer` event.
     *
     * Requirements:
     *
     * - `sender` cannot be the zero address.
     * - `recipient` cannot be the zero address.
     * - `sender` must have a balance of at least `amount`.
     */
    function _transfer(address sender, address recipient, uint256 amount) internal {
emit __StatementCoverage(6000016);
        require(sender != address(0), "ERC20: transfer from the zero address");
emit __StatementCoverage(6000017);
        require(recipient != address(0), "ERC20: transfer to the zero address");

emit __StatementCoverage(6000018);
        _balances[sender] = _balances[sender].sub(amount);
emit __StatementCoverage(6000019);
        _balances[recipient] = _balances[recipient].add(amount);
emit __StatementCoverage(6000020);
        emit Transfer(sender, recipient, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a `Transfer` event with `from` set to the zero address.
     *
     * Requirements
     *
     * - `to` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal {
emit __StatementCoverage(6000021);
        require(account != address(0), "ERC20: mint to the zero address");

emit __StatementCoverage(6000022);
        _totalSupply = _totalSupply.add(amount);
emit __StatementCoverage(6000023);
        _balances[account] = _balances[account].add(amount);
emit __StatementCoverage(6000024);
        emit Transfer(address(0), account, amount);
    }

    /**
     * @dev Destoys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a `Transfer` event with `to` set to the zero address.
     *
     * Requirements
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 value) internal {
emit __StatementCoverage(6000025);
        require(account != address(0), "ERC20: burn from the zero address");

emit __StatementCoverage(6000026);
        _totalSupply = _totalSupply.sub(value);
emit __StatementCoverage(6000027);
        _balances[account] = _balances[account].sub(value);
emit __StatementCoverage(6000028);
        emit Transfer(account, address(0), value);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner`s tokens.
     *
     * This is internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an `Approval` event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(address owner, address spender, uint256 value) internal {
emit __StatementCoverage(6000029);
        require(owner != address(0), "ERC20: approve from the zero address");
emit __StatementCoverage(6000030);
        require(spender != address(0), "ERC20: approve to the zero address");

emit __StatementCoverage(6000031);
        _allowances[owner][spender] = value;
emit __StatementCoverage(6000032);
        emit Approval(owner, spender, value);
    }

    /**
     * @dev Destoys `amount` tokens from `account`.`amount` is then deducted
     * from the caller's allowance.
     *
     * See `_burn` and `_approve`.
     */
    function _burnFrom(address account, uint256 amount) internal {
emit __StatementCoverage(6000033);
        _burn(account, amount);
emit __StatementCoverage(6000034);
        _approve(account, msg.sender, _allowances[account][msg.sender].sub(amount));
    }
}